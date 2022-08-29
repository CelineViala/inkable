const { Consumer } = require('../models');
const authService = require('../services/checkForms');

module.exports = {
    // addConsumer est supprimé car géré par le authController (cf route /signupConsumer)
    async getOneConsumer(req, res) {
        // récupère l'id du consumer
        const { id } = req.params;
        // trouve le consumer
        const consumer = await Consumer.findByPk(id, { include: ['projects', { association: 'appointments' }] });
        // si ok, on renvoi le consumer, sinon une erreur
        if (consumer) {
            res.json(consumer);
        } else {
            throw new Error(`Aucun consumer à l'id ${id}`, { statusCode: 404 });
        }
    },

    async modifyConsumer(req, res) {
        // récupère l'id du consumer
        const { id } = req.params;
        // trouve le consumer
        const consumer = await Consumer.findByPk(id);
        // si tout va bien on modifie
        if (consumer) {
            if (req.body.email) {
                consumer.email = req.body.email;
            }
            if (req.body.first_name) {
                consumer.first_name = req.body.first_name;
            }
            if (req.body.last_name) {
                consumer.last_name = req.body.last_name;
            }
            if (req.body.password) {
                consumer.password = await authService.hashPassword(req.body.password);
            }
            if (req.body.profile_picture_path_consumer) {
                consumer.profile_picture_path_consumer = req.body.profile_picture_path_consumer;
            }
            if (req.body.date_of_birth) {
                consumer.date_of_birth = req.body.date_of_birth;
            }
            // on sauvegarde en bdd
            const savedConsumer = await consumer.save();
            // on renvoie le json
            res.json(savedConsumer);
        } else {
            throw new Error(`Aucun consumer à l'id ${id}`, { statusCode: 404 });
        }
    },

    async deleteConsumer(req, res) {
        // récupérer l'id demandé
        const { id } = req.params;
        // trouver le consumer
        const consumer = await Consumer.findByPk(id);
        // si on trouve
        if (consumer) {
            // on supprime
            await consumer.destroy();
            res.json('Consumer supprimé');
        } else {
            throw new Error(`Aucun consumer à l'id ${id}`, { statusCode: 404 });
        }
    },
};
