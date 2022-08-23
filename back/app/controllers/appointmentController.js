const { Appointment, Pro } = require('../models');

module.exports = {

    async getAllApointmentsByPro(req, res) {
        // On récupère les rdv liés à un pro
        const { id } = req.params;
        const pro = await Pro.findByPk(id);
        if (!pro) throw new Error(`Aucun pro à l'id ${id}`, { statusCode: 404 });
        const appointments = await Appointment.findAll({
            where: {
                pro_id: id,
            },
        });
        res.json(appointments);
    },

    async addAppointement(req, res) {
        const { id } = req.params;
        const pro = await Pro.findByPk(id);
        if (!pro) throw new Error(`Aucun pro à l'id ${id}`, { statusCode: 404 });
        // validation des champs obligatoire se fait avec Joi
        // créer le rdv
        const newRdv = await Appointment.create({
            title: req.body.title,
            note: req.body.note,
            beginning_hour: req.body.beginning_hour,
            ending_hour: req.body.ending_hour,
            pro_id: req.body.pro_id,
            project_id: req.body.project_id,
        });
        res.json(newRdv);
    },

    async modifyAppointement(req, res) {
        // récupérer l'id demandé
        const { idPro, idRdv } = req.params;
        const pro = await Pro.findByPk(idPro);
        if (!pro) throw new Error(`Aucun pro à l'id ${idPro}`, { statusCode: 404 });
        // trouver le consumer
        const appointment = await Appointment.findByPk(idRdv);
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
            throw new Error(`Aucun RDV à l'id ${idRdv}`, { statusCode: 404 });
        }
    },

    async deleteAppointement(req, res) {
        // récupérer l'id demandé
        const { idPro, idRdv } = req.params;
        const pro = await Pro.findByPk(idPro);
        if (!pro) throw new Error(`Aucun pro à l'id ${idPro}`, { statusCode: 404 });
        const appointment = await Appointment.findByPk(idRdv);
        // si on trouve
        if (appointment) {
            // on supprime
            await appointment.destroy();
            res.json('RDV supprimé');
        } else {
            throw new Error(`Aucun RDV à l'id ${idRdv}`, { statusCode: 404 });
        }
    },
};
