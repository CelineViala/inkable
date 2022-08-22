/* eslint-disable object-shorthand */
const { Project } = require('../models');

module.exports = {
    async getOneProject(req, res) {
        const { id } = req.params;
        try {
            const project = await Project.findByPk(id);
            if (project) {
                res.json(project);
            } else {
                res.status(400).json({
                    message: 'Projet non existant',
                });
            }
        } catch (error) {
            console.log(error);
        }
    },

    async createProject(req, res) {
        try {
            req.body.status = 'en attente';
            const newProject = await Project.create(req.body);
            return res.json(newProject);
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: 'Erreur lors de la création du projet',
            });
        }
    },

    async modifyProject(req, res) {
        try {
            const { id } = req.params;
            const project = await Project.findByPk(id);
            if (!project) return res.status(404).json("Ce projet n'existe pas");
            if (req.body.title) project.title = req.body.title;
            if (req.body.description) project.description = req.body.description;
            if (req.body.status) project.status = req.body.status;
            if (req.body.color) project.color = req.body.color;
            if (req.body.area) project.area = req.body.area;
            await project.save();
            return res.json(project);
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: 'Impossible de modifier le projet',
            });
        }
    },

    // eslint-disable-next-line max-len
    // necessite un delete on cascade : foreign key constraint "appointment_project_id_fkey" on table "appointment"
    async deleteProject(req, res) {
        try {
            const { id } = req.params;
            const project = await Project.findByPk(id);
            if (project) {
                await project.destroy();
                res.status(200).json();
            } else {
                res.status(404).json('Projet non existant');
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Erreur lors de la suppression du projet',
            });
        }
    },

    async getAllProjectsByPro(req, res) {
        try {
            const { id } = req.params;
            console.log(id);
            const projects = await Project.findAll({
                where: {
                    pro_id: id,
                },
            });
            res.json(projects);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Erreur serveur',
            });
        }
    },

    async getAllProjectsByConsumer(req, res) {
        try {
            const { id } = req.params;
            console.log(id);
            const projects = await Project.findAll({
                where: {
                    consumer_id: id,
                },
            });
            res.json(projects);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Erreur serveur',
            });
        }
    },

};
