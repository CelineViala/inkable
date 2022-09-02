const { Appointment, Pro } = require('../models');

module.exports = {

    /**
     * Appointment controller to get all the appointments of a pro
     * ExpressMiddleware signature
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns All appointments - Route API JSON response
     */

    async getAllApointmentsByPro(req, res) {
        // Récupérer le pro en fonction de l'id
        const { id } = req.params;
        const pro = await Pro.findByPk(id);
        if (!pro) throw new Error(`Aucun pro à l'id ${id}`, { statusCode: 404 });
        // Récupérer tous les rdv du pro
        const appointments = await Appointment.findAll({
            where: {
                pro_id: id,
            },
        });
        // Renvoyer la réponse
        res.json(appointments);
    },

    /**
     * Appointment controller to add an appointments at one pro
     * ExpressMiddleware signature
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns Added appointment - Route API JSON response
     */

    async addAppointement(req, res) {
        // Récupérer le pro en fonction de l'id
        const { id } = req.params;
        const pro = await Pro.findByPk(id);
        if (!pro) throw new Error(`Aucun pro à l'id ${id}`, { statusCode: 404 });
        // la validation des champs obligatoire se fait avec Joi
        // Créer le rdv
        const newRdv = await Appointment.create({
            title: req.body.title,
            note: req.body.note,
            beginning_hour: req.body.beginning_hour,
            ending_hour: req.body.ending_hour,
            pro_id: req.body.pro_id,
            project_id: req.body.project_id,
        });
        // Renvoyer la réponse
        res.json(newRdv);
    },

    /**
     * Appointment controller to modify an appointments of a pro
     * ExpressMiddleware signature
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns Modified appointment - Route API JSON response
     */

    async modifyAppointement(req, res) {
        // Récupérer les id du pro et du rdv
        const { idPro, idRdv } = req.params;
        const pro = await Pro.findByPk(idPro);
        if (!pro) throw new Error(`Aucun pro à l'id ${idPro}`, { statusCode: 404 });
        const appointment = await Appointment.findByPk(idRdv);
        // Modifier le rdv si trouvé avec les infos du body
        if (appointment) {
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
            // Sauvegarder en bdd
            const appointmentSaved = await appointment.save();
            // Envoyer une réponse
            res.json(appointmentSaved);
        } else {
            throw new Error(`Aucun RDV à l'id ${idRdv}`, { statusCode: 404 });
        }
    },

    /**
     * Appointment controller to delete an appointments at one pro
     * ExpressMiddleware signature
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns Sucess response - Route API JSON response
     */

    async deleteAppointement(req, res) {
        // Récupérer les id demandés
        const { idPro, idRdv } = req.params;
        const pro = await Pro.findByPk(idPro);
        if (!pro) throw new Error(`Aucun pro à l'id ${idPro}`, { statusCode: 404 });
        const appointment = await Appointment.findByPk(idRdv);
        // Supprimer si on trouve et envoi d'une réponse au front
        if (appointment) {
            await appointment.destroy();
            res.json('RDV supprimé');
        } else {
            throw new Error(`Aucun RDV à l'id ${idRdv}`, { statusCode: 404 });
        }
    },
};
