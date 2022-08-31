/* eslint-disable object-shorthand */
const {
    Pro, Tattoo, Project, Style,
} = require('../models');
const authService = require('../services/checkForms');
const client = require('../config/db');

module.exports = {
    // suppression addPro car géré dans AuthController (cf route /signupPro)
    async getAllPro(req, res) {
        const pros = await Pro.findAll({
            include: ['styles', 'tattoos', 'appointments', 'projects'],
        });
        return res.json(pros);
    },

    async CreateSearch(req, res) {
        // ! a continuer plus tard et à tester !
        // try {
        // const searchCity = req.body.city;
        //     const searchColor = req.body.color;
        //     const searchBw = req.body.black_and_white;
        //     const searchStyle = req.body.styles;

        //     if (searchCity) {
        //         const sqlCity = await client.query('SELECT city FROM "pro" WHERE city = searchCity');
        //         return res.json(sqlCity);
        //     }
        //     if (searchColor) {
        //         const sqlColor = await client.query('SELECT color FROM "pro" WHERE color = searchColor');
        //         return res.json(sqlColor);
        //     }
        //     if (searchBw) {
        //         const sqlBW = await client.query('SELECT black_and_white FROM "pro" WHERE black_and_white = searchBw');
        //         return res.json(sqlBW);
        //     }
        //     if (searchStyle) {
        //         const sqlStyle = await client.query('SELECT name FROM "style" WHERE name = searchStyle');
        //         return res.json(sqlStyle);
        //     }
        // } catch (error) {
        //     console.log(error);
        //     res.status(500).json({
        //         message: 'Erreur lors de la récupération des filtres',
        //     });
        // }

        let query = `SELECT DISTINCT pro.* FROM pro
        LEFT OUTER JOIN categorise ON pro_id=pro.id
        LEFT OUTER JOIN style on categorise.style_id=style.id
        WHERE `;
        let conditions = [];
        const args = [];
        let count = 1;

        if (req.body.city !== undefined) {
            conditions.push(`city = $${count}`);
            args.push(req.body.city);
            count += 1;
        }
        if (req.body.color !== undefined) {
            conditions.push(`color = $${count}`);
            args.push(req.body.color);
            count += 1;
        }
        if (req.body.black_and_white !== undefined) {
            conditions.push(`black_and_white = $${count}`);
            args.push(req.body.black_and_white);
            count += 1;
        }
        if (req.body.style !== undefined) {
            conditions.push(`style.name= $${count}`);
            args.push(req.body.style);
        }
        conditions = conditions.join(' AND ');
        query += conditions;
        const filteredPros = await client.query(query, {
            bind: args,
        });
        res.json(filteredPros[0]);
    },

    async getOnePro(req, res) {
        const { id } = req.params;
        const findOnePro = await Pro.findByPk(id, {
            include: ['styles', 'tattoos', 'appointments', 'projects'],
        });
        if (findOnePro) {
            res.json(findOnePro);
        } else {
            throw new Error(`Aucun pro à l'id ${id}`, { statusCode: 404 });
        }
    },

    async modifyPro(req, res, next) {
        const { id } = req.params;
        console.log('>>>>>>>>', id);
        const pro = await Pro.findByPk(id);
        if (pro) {
            if (req.body.studio_name) {
                pro.studio_name = req.body.studio_name;
            }
            if (req.body.email) {
                const error = await authService.checkUnicity(Pro, req.body.email);
                if (error) throw error;
                else pro.email = req.body.email;
            }
            if (req.body.password) {
                pro.password = await authService.hashPassword(req.body.password);
            }
            if (req.body.profile_picture_path_pro) {
                pro.profile_picture_path_pro = req.body.profile_picture_path_pro;
            }
            if (req.body.description) {
                pro.description = req.body.description;
            }
            if (req.body.instagram) {
                pro.instagram = req.body.instagram;
            }
            if (req.body.color !== undefined) {
                pro.color = req.body.color;
            }
            if (req.body.black_and_white !== undefined) {
                pro.black_and_white = req.body.black_and_white;
            }

            if (req.body.city) {
                pro.city = req.body.city.toUpperCase();
            }

            if (req.body.styles) {
                const styles = await Style.findAll();
                styles.forEach(async (style) => {
                    await pro.removeStyle(style);
                    await style.removePro(pro);
                });
                req.body.styles.forEach(async (style) => {
                    const oneStyle = await Style.findOne({ where: { name: style } });
                    await pro.addStyle(oneStyle);
                });
            }
            // on sauvegarde dans le BDD
            const proSaved = await pro.save();
            res.json(proSaved);
        } else {
            throw new Error(`Aucun pro à l'id ${id}`, { statusCode: 404 });
        }
    },

    async deletePro(req, res) {
        const { id } = req.params;

        const pro = await Pro.findByPk(id);
        if (pro) {
            await pro.destroy();
            res.json('Pro supprimé');
        } else {
            throw new Error(`Aucun pro à l'id ${id}`, { statusCode: 404 });
        }
    },

    async getAllTattoosByPro(req, res) {
        const { id } = req.params;
        const pro = await Pro.findByPk(id);
        if (!pro) { throw new Error(`Aucun pro à l'id ${id}`, { statusCode: 404 }); }

        const tattoos = await Tattoo.findAll({
            where: {
                pro_id: id,
            },
        });
        res.json(tattoos);
    },

    async addTattoo(req, res) {
        const { id } = req.params;
        const findOnePro = await Pro.findByPk(id);
        if (findOnePro) {
            const newTattoo = await Tattoo.create({
                tattoo_picture_path: req.body.tattoo_picture_path,
                pro_id: id,
            });
            res.json(newTattoo);
        } else {
            throw new Error(`Aucun pro à l'id ${id}`, { statusCode: 404 });
        }
    },

    async deleteTattoo(req, res) {
        const { idPro, idTattoo } = req.params;
        const pro = await Pro.findByPk(idPro);
        if (!pro) throw new Error(`Aucun pro à l'id ${idPro}`, { statusCode: 404 });
        const tattoo = await Tattoo.findByPk(idTattoo);
        if (tattoo) {
            await tattoo.destroy();
            res.json('Tatouage supprimé');
        } else {
            throw new Error(`Aucun tattoo à l'id ${idTattoo}`, { statusCode: 404 });
        }
    },

};
