/* eslint-disable object-shorthand */
const {
    Project,
    Pro,
    Consumer,
    Message,
} = require('../models');

module.exports = {

    /**
     * Project controller to get one project
     * ExpressMiddleware signature
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns Route API JSON response
     */

    async getOneProject(req, res) {
        // Récupérer l'id et le projet
        const { id } = req.params;
        const project = await Project.findByPk(id, {
            include: ['appointments', 'consumer', 'pro', {
                association: 'messages',
                include: ['pro', 'consumer'],
            }],
        });
        // Renvoyer une réponse
        if (project) {
            res.json(project);
        } else {
            throw new Error(`Aucun projet à l'id ${id}`, {
                statusCode: 404,
            });
        }
    },

    /**
     * Project controller to create one project
     * ExpressMiddleware signature
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns Route API JSON response
     */

    async createProject(req, res) {
        req.body.status = 'en attente';
        const newProject = await Project.create(req.body);
        return res.json(newProject);
    },

    /**
     * Project controller to modify one project
     * ExpressMiddleware signature
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns Route API JSON response
     */

    async modifyProject(req, res) {
        // Récupérer l'id et le projet
        const { id } = req.params;
        const project = await Project.findByPk(id);
        if (!project) {
            throw new Error(`Aucun projet à l'id ${id}`, {
                statusCode: 404,
            });
        }
        // Modifier le projet avec les infos du body
        if (req.body.title) project.title = req.body.title;
        if (req.body.description) project.description = req.body.description;
        if (req.body.status) project.status = req.body.status;
        if (req.body.color !== undefined) project.color = req.body.color;
        if (req.body.area) project.area = req.body.area;
        // Sauvegarder et envoyer la réponse
        await project.save();
        return res.json(project);
    },

    /**
     * Project controller to delete one project
     * ExpressMiddleware signature
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns Route API JSON response
     */

    async deleteProject(req, res) {
        // Récupérer l'id et le projet
        const { id } = req.params;
        const project = await Project.findByPk(id);
        if (!project) {
            throw new Error(`Aucun projet à l'id ${id}`, {
                statusCode: 404,
            });
        }
        // Supprimer et envoyer la réponse
        await project.destroy();
        res.status(200).json('Projet supprimé');
    },

    /**
     * Project controller to get all projects from a pro
     * ExpressMiddleware signature
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns Route API JSON response
     */

    async getAllProjectsByPro(req, res) {
        // Récupérer les id du pro et des projets
        const { id } = req.params;
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
            include: 'consumer',

        });
        // Envoyer la réponse
        res.json(projects);
    },

    /**
     * Project controller to get all projects from a consumer
     * ExpressMiddleware signature
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns Route API JSON response
     */

    async getAllProjectsByConsumer(req, res) {
        // Récupérer les id du consumer et des projets
        const { id } = req.params;
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
        // Envoyer la réponse
        res.json(projects);
    },
    async createMessage(req, res) {
        const newMessage = await Message.create(req.body);
        return res.json(newMessage);
    },
};
