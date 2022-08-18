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
            const project = await Project.create(req.body);
            return res.json(project);
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: 'Erreur serveur',
            });
        }
    },

    async modifyProject(req, res) { //!A tester
        try {
            const { id } = req.params;
            const project = await Project.findOneByPk(id);
            if (!project) return res.status(404).json("Ce projet n'existe pas");
            if (req.body.title) project.title = req.body.title;
            if (req.body.description) project.title = req.body.description;
            if (req.body.status) project.title = req.body.status;
            if (req.body.color) project.title = req.body.color;
            if (req.body.area) project.title = req.body.area;
            await project.save();
            return res.json(project);
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: 'Erreur serveur',
            });
        }
    },

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
                message: 'Erreur serveur',
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
