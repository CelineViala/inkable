const jwt = require('jsonwebtoken');
const { Pro, Consumer } = require('../models');
const InputError = require('../errors/inputError');
const ApiError = require('../errors/apiError');
const serviceAuth = require('../services/checkForms');
// const City = require('../models/city');

const authController = {

    async signupPro(req, res, next) {
        // les verifications du bon format email, password=passwordConfirm,
        // champs obligatoires se font avec Joi

        // Verif qu'il n'existe pas déjà
        const error = await serviceAuth.checkUnicity(Pro, req.body.email);
        if (error) {
            return next(new ApiError(error));
        }
        delete req.body.passwordConfirm;
        req.body.role = 'pro';
        req.body.password = await serviceAuth.hashPassword(req.body.password);

        const newPro = Pro.build(req.body);
        newPro.save();

        return res.status(200).json(newPro);
    },
    async signupConsumer(req, res, next) {
        const error = await serviceAuth.checkUnicity(Consumer, req.body.email);

        if (error) {
            return next(error);
        }

        delete req.body.passwordConfirm;
        req.body.role = 'consumer';
        req.body.password = await serviceAuth.hashPassword(req.body.password);

        const newConsumer = await Consumer.create(req.body);

        return res.status(200).json(newConsumer);
    },
    testConsumer(req, res) {
        if (req.user.role === 'consumer') { res.json('Vous pouvez accéder à votre dashboard Consumer'); } else { res.sendStatus(403); }
    },
    verifyToken(req, res) {
        res.json(req.user.role);
    },
    testPro(req, res) {
        if (req.user.role === 'pro') { res.json('Vous pouvez accéder à votre dashboard Pro'); } else { res.sendStatus(403); }
    },

    async login(req, res, next) {
        const pro = await serviceAuth.findUser(Pro, req.body.email);

        const consumer = await serviceAuth.findUser(Consumer, req.body.email);

        if (!pro && !consumer) return next(new ApiError('Compte non existant', { statusCode: 500 }));
        let user;
        if (pro) {
            user = pro;
        } else if (consumer) {
            user = consumer;
        }
        if (!await serviceAuth.checkPassword(req.body.password, user.password)) return next(new InputError('Mot de passe erroné', { statusCode: 400 }));
        const accessToken = jwt.sign(
            { email: user.email, role: user.role },
            process.env.JWT_SECRET,
        );
        return res.json({ accessToken }); // le token devra être stocké côté front pour connaitre
        // le role de l'utilisateur
    },
    logout(req, res) {
        // le TOKEN doit être supprimé des cookies
    },

};

module.exports = authController;
