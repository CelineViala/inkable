const { Pro } = require('../models');

module.exports = {
    async getAllPro(_, res) {
        try {
            const pros = await Pro.findAll({
                include: ['style', 'tatouage', 'city'],
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
                role
            } = req.body

            if (
                !studio_name,
                !email,
                !password,
                !color,
                !black_and_white
            ){
                res.status(400).json({
                    message: 'Le champ name est obligatoire',
                  });
            } else {
                const newPro = await Pro.create({
                    studio_name: studio_name, 
                    email: email,
                    password: password,
                    profile_picture_path_pro: profile_picture_path_pro,
                    description: description,
                    instagram : instagram,
                    color: color,
                    black_and_white: black_and_white,
                    role : role
                });
                res.json(newPro)
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
              message: 'Erreur lors de la création du pro',
            });
    },

    async CreateSearch(_, res) {

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

    async modifyPro(_, res) {

    },

    async deletePro(_, res) {

    },

    async getAllTattoosByPro(_, res) {

    },

    async addTattoo(_, res) {

    },

    async deleteTattoo(_, res) {

    },

};
