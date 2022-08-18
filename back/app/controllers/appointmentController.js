const { Appointment } = require('../models');

module.exports = {

    async getAllApointmentsByPro(_, res) {
        // manque ca
    },

    async addAppointement(req, res) {
        try {
            // gérer les champs obligatoire
            if (!req.body.title) {
                // pour tomber dans le catch, on peut jeter une erreur
                throw new Error('title obligatoire');
            }
            if (!req.body.beginning_hour) {
                throw new Error('beginning_hour obligatoire');
            }
            if (!req.body.ending_hour) {
                throw new Error('ending_hour obligatoire');
            }
            if (!req.body.pro_id) {
                throw new Error('pro_id obligatoire');
            }
            if (!req.body.project_id) {
                throw new Error('project_id obligatoire');
            }
            // créer le rdv
            const newRdv = await Appointment.create({
                title: req.body.title,
                note: req.body.note,
                beginning_hour: req.body.beginning_hour,
                ending_hour: req.body.ending_hour,
                pro_id: req.body.pro_id,
                project_id: req.body.project_id,
            });
            // envoyer une réponse
            res.json(newRdv);
        } catch (error) {
            console.trace(error);
            res.status(500).json({
                message: 'RDV non créer',
            });
        }
    },

    async modifyAppointement(req, res) {
        try {
            // récupérer l'id demandé
            const { id } = req.params;
            // trouver le consumer
            const appointment = await Appointment.findByPk(id);
            // si on trouve
            if (appointment) {
                // on mets à jour avec les infos du body
                if (req.body.title) {
                    appointment.title = req.body.title;
                }
                if (req.body.note) {
                    appointment.note = req.body.note;
                }
                if (req.body.beginning_hour) {
                    appointment.beginning_hour = req.body.beginning_hour;
                }
                if (req.body.ending_hour) {
                    appointment.ending_hour = req.body.ending_hour;
                }
                // sauvegarder en bdd
                const appointmentSaved = await appointment.save();
                // envoyer une réponse
                res.json(appointmentSaved);
            } else {
                res.status(404).json('Aucun RDV');
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'RDV non modifié',
            });
        }
    },

    async deleteAppointement(req, res) {
        try {
            // récupérer l'id demandé
            const { id } = req.params;
            // trouver le consumer
            const appointment = await Appointment.findByPk(id);
            // si on trouve
            if (appointment) {
                // on supprime
                await appointment.destroy();
                res.json('RDV supprimé');
            } else {
                res.status(404).json(`Aucun RDV à l'id ${id}`);
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'RDV non supprimé',
            });
        }
    },
};
