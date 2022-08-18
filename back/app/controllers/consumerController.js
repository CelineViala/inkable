const { Consumer } = require('../models');
const ApiError = require('../errors/apiError');

module.exports = {

    async addConsumer(req, res) {
        try {
            // if statement pour que tout soit rempli
            if (!req.body.email) {
                throw new Error('email obligatoire');
            }
            if (!req.body.first_name) {
                throw new Error('prénom obligatoire');
            }
            if (!req.body.last_name) {
                throw new Error('nom obligatoire');
            }
            if (!req.body.password) {
                throw new Error('mdp obligatoire');
            }
            if (!req.body.date_of_birth) {
                throw new Error('date anniversaire obligatoire');
            }

            // création du consumer
            const newConsumer = await Consumer.create({
                email: req.body.email,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                password: req.body.password,
                profil_picture_path_consumer: req.body.profil_picture_path_consumer,
                date_of_birth: req.body.date_of_birth,
            });

            // renvoie le nouveau consumer
            res.json(newConsumer);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Erreur',
            });
        }
    },

    async getOneConsumer(req, res) {
        try {
            // récupère l'id du consumer
            const { id } = req.params;
            // trouve le consumer
            const consumer = await Consumer.findByPk(id);
            // si ok, on renvoi le consumer, sinon une erreur
            if (consumer) {
                res.json(consumer);
            } else {
                res.status(404).json(`Aucun consumer à l'id ${id}`);
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'consumer non trouvé',
            });
        }
    },

    async modifyConsumer(_, res) {

    },

    async deleteConsumer(_, res) {

    },
};
