const jwt = require('jsonwebtoken');
const { Pro, Consumer, Style } = require('../models');
const InputError = require('../errors/inputError');
const ApiError = require('../errors/apiError');
const serviceAuth = require('../services/checkForms');

// toutes les vérifications des champs se font avec JOI

const authController = {

    /**
     * Auth controller to sign up a pro
     * ExpressMiddleware signature
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns Route API JSON response
     */

    async signupPro(req, res) {
        // Verifier s'il n'existe pas déjà grâce à l'email
        const error = await serviceAuth.checkUnicity(Pro, req.body.email);
        if (error) {
            throw new ApiError(error);
        }
        // Préparer les données du pro
        delete req.body.passwordConfirm;
        req.body.role = 'pro';
        req.body.password = await serviceAuth.hashPassword(req.body.password);
        req.body.city = req.body.city.toUpperCase();

        // ! A supprimer ?
        // transformation du tableau req.body.styles pour pouvoir faire l'insertion du pro dans la
        // bdd tout en remplissant la table "Style" (association manyTomany)
        // if (req.body.styles) {
        //     const styles = req.body.styles.map((style) => ({ name: style }));
        //     req.body.styles = styles;
        // }

        // Créer le nouveau pro
        const newPro = await Pro.create(req.body);
        req.body.styles.forEach(async (style) => {
            const oneStyle = await Style.findOne({ where: { name: style } });
            await newPro.addStyle(oneStyle);
            await oneStyle.addPro(newPro);
        });

        return res.status(200).json(newPro);
    },

    /**
     * Auth controller to sign up a consumer
     * ExpressMiddleware signature
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns Route API JSON response
     */

    async signupConsumer(req, res) {
        // Vérifier s'il n'existe pas déjà avec l'email
        const error = await serviceAuth.checkUnicity(Consumer, req.body.email);
        if (error) {
            throw error;
        }
        // Préparer les données du consumer
        delete req.body.passwordConfirm;
        req.body.role = 'consumer';
        req.body.password = await serviceAuth.hashPassword(req.body.password);
        // Créer le consumer en BDD et renvoyer une réponse
        const newConsumer = await Consumer.create(req.body);
        return res.status(200).json(newConsumer);
    },

    // Fonctions de vérifications
    testConsumer(req, res) {
        if (req.user.role === 'consumer') { res.json('Vous pouvez accéder à votre dashboard Consumer'); } else { res.sendStatus(403); }
    },
    verifyToken(req, res) {
        res.json(req.user);
    },
    testPro(req, res) {
        if (req.user.role === 'pro') { res.json('Vous pouvez accéder à votre dashboard Pro'); } else { res.sendStatus(403); }
    },

    /**
     * Auth controller to login as a pro or consumer
     * ExpressMiddleware signature
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns Route API JSON response
     */
    // ! next à supprimer?
    async login(req, res, next) {
        // Récupérer les mails
        const pro = await serviceAuth.findUser(Pro, req.body.email);
        const consumer = await serviceAuth.findUser(Consumer, req.body.email);
        if (!pro && !consumer) throw new ApiError('Compte non existant', { statusCode: 500 });
        // Rediriger en fonction du rôle
        let user;
        if (pro) {
            user = pro;
        } else if (consumer) {
            user = consumer;
        }
        // Vérifier le mdp
        if (!await serviceAuth.checkPassword(req.body.password, user.password)) throw new InputError('Mot de passe erroné', { statusCode: 400 });
        const accessToken = jwt.sign(
            { role: user.role, id: user.id },
            process.env.JWT_SECRET,
        );
        // Renvoyer la réponse avec le token pour que le front connaisse le role de l'utilisateur
        return res.json({ accessToken });
    },

    // ! fonction logout pas encore faite
    logout(req, res) {
        // le TOKEN doit être supprimé des cookies
    },

};

module.exports = authController;
