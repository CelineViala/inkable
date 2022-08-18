/* eslint-disable object-shorthand */
const { Pro, Tattoo } = require('../models');

module.exports = {
    async getAllPro(_, res) {
        try {
            const pros = await Pro.findAll({
                include: ['styles', 'tattoos', 'city'],
            });
            return res.json(pros);
        } catch (error) {
            console.trace(error);
            res.status(500).json({
                message: 'Impossible de récupérer les pros',
            });
        }
    },

    async AddPro(req, res) {
        try {
            const {
                studio_name,
                email,
                password,
                profile_picture_path_pro,
                description,
                instagram,
                color,
                black_and_white,
                role,
                city_id,
            } = req.body;

            if (
                !studio_name,
                !email,
                !password,
                !color,
                !black_and_white,
                !city_id
            ) {
                res.status(400).json({
                    message: 'Le champ est obligatoire',
                });
            } else {
                const newPro = await Pro.create({
                    studio_name: studio_name,
                    email: email,
                    password: password,
                    profile_picture_path_pro: profile_picture_path_pro,
                    description: description,
                    instagram: instagram,
                    color: color,
                    black_and_white: black_and_white,
                    role: role,
                    city_id: city_id,
                });
                res.json(newPro);
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Erreur lors de la création du pro',
            });
        }
    },

    async CreateSearch(req, res) {

    },

    async getOnePro(req, res) {
        try {
            const { id } = req.params;
            const findOnePro = await Pro.findByPk(id);
            if (findOnePro) {
                res.json(findOnePro);
            } else {
                res.status(400).json({
                    message: 'Tatoueur non trouvé',
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Erreur lors de la récupération du pro',
            });
        }
    },

    async modifyPro(req, res) {
        try {
            const { id } = req.params;
            const pro = await Pro.findByPk(id);
            if (pro) {
                if (req.body.studio_name) {
                    pro.studio_name = req.body.studio_name;
                }
                if (req.body.email) {
                    pro.email = req.body.email;
                }
                //! Attention à encoder à nouveau le password pour la sécurité
                if (req.body.password) {
                    pro.password = req.body.password;
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
                if (req.body.color) {
                    pro.color = req.body.color;
                }
                if (req.body.black_and_white) {
                    pro.black_and_white = req.body.black_and_white;
                }
                // on sauvegarde dans le BDD
                const proSaved = await pro.save();
                res.json(proSaved);
            } else {
                res.status(404).json(`Aucune pro à l'id ${id}`);
            }
        } catch (error) {
            console.trace(error);
            res.status(500).json({
                message: 'Erreur lors de la modification du pro',
            });
        }
    },

    async deletePro(req, res) {
        try {
            const { id } = req.params;
            const pro = await Pro.findByPk(id);
            if (pro) {
                await pro.destroy();
                res.json('Pro supprimé');
            } else {
                res.status(404).json(`Aucun pro à l'id ${id}`);
            }
        } catch (error) {
            console.trace(error);
            res.status(500).json({
                message: 'Erreur lors de la suppression du pro',
            });
        }
    },

    async getAllTattoosByPro(req, res) {
        try {
            const { id } = req.params;
            const tattoos = await Tattoo.findAll({
                where: {
                    pro_id: id,
                },
                include: 'pro',
            });
            res.json(tattoos);
        } catch (error) {
            console.trace(error);
            res.status(500).json(error);
        }
    },

    async addTattoo(req, res) {
        try {
            const { id } = req.params;
            const findOnePro = await Pro.findByPk(id);
            if (findOnePro) {
                const newTattoo = await Tattoo.create({
                    tattoo_picture_path: req.body.tattoo_picture_path,
                    pro_id: id,
                });
                res.json(newTattoo);
            } else {
                res.status(404).json(`Aucun pro à l'id ${id}`);
            }
        } catch (error) {
            console.trace(error);
            res.status(500).json({
                message: 'Impossible de rajouter le tatouage',
            });
        }
    },

    async deleteTattoo(req, res) {
        try {
            const { id } = req.params;
            const tattoo = await Tattoo.findByPk(id);
            if (tattoo) {
                await tattoo.destroy();
                res.json('Tatouage supprimé');
            } else {
                res.status(404).json(`Aucun tatouage à l'id ${id}`);
            }
        } catch (error) {
            console.trace(error);
            res.status(500).json({
                message: 'Erreur lors de la suppression du tatouage',
            });
        }
    },

};
