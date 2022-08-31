/* eslint-disable object-shorthand */
const {
    Project,
    Pro,
    Consumer,
} = require('../models');

module.exports = {
    async getOneProject(req, res) {
        const {
            id,
        } = req.params;
        /* const quizz = await Quiz.findByPk(id, {
                include: ["tags","author",{
                    association: "questions",
                    include: ["level","answers"]
                }]
            }) */
        const project = await Project.findByPk(id, {
            include: ['appointments', 'consumer', 'pro', {
                association: 'messages',
                include: ['pro', 'consumer'],
            }],
        });
        if (project) {
            res.json(project);
        } else {
            throw new Error(`Aucun projet à l'id ${id}`, {
                statusCode: 404,
            });
        }
    },

    async createProject(req, res) {
        req.body.status = 'en attente';
        const newProject = await Project.create(req.body);
        return res.json(newProject);
    },

    async modifyProject(req, res) {
        const {
            id,
        } = req.params;
        const project = await Project.findByPk(id);
        if (!project) {
            throw new Error(`Aucun projet à l'id ${id}`, {
                statusCode: 404,
            });
        }
        if (req.body.title) project.title = req.body.title;
        if (req.body.description) project.description = req.body.description;
        if (req.body.status) project.status = req.body.status;
        if (req.body.color !== undefined) project.color = req.body.color;
        if (req.body.area) project.area = req.body.area;
        await project.save();
        return res.json(project);
    },

    async deleteProject(req, res) {
        const {
            id,
        } = req.params;
        const project = await Project.findByPk(id);
        if (!project) {
            throw new Error(`Aucun projet à l'id ${id}`, {
                statusCode: 404,
            });
        }
        await project.destroy();
        res.status(200).json('Projet supprimé');
    },

    async getAllProjectsByPro(req, res) {
        const {
            id,
        } = req.params;
        const pro = await Pro.findByPk(id);
        if (!pro) {
            throw new Error(`Aucun pro à l'id ${id}`, {
                statusCode: 404,
            });
        }
        const projects = await Project.findAll({
            where: {
                pro_id: id,
            },
        }, { include: 'consumer' });
        res.json(projects);
    },

    async getAllProjectsByConsumer(req, res) {
        const {
            id,
        } = req.params;
        const consumer = await Consumer.findByPk(id);
        if (!consumer) {
            throw new Error(`Aucun utilisateur à l'id ${id}`, {
                statusCode: 404,
            });
        }
        const projects = await Project.findAll({
            where: {
                consumer_id: id,
            },
        });
        res.json(projects);
    },

};
