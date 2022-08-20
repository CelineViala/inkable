const jwt = require('jsonwebtoken');
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');
const consumerController = require('./consumerController');
const proController = require('./proController');
const { Pro } = require('../models');
const InputError = require('../errors/inputError');
const ApiError = require('../errors/apiError');
// const City = require('../models/city');

const authController = {

    async signupPro(req, res, next) {
        //! A reporter dans proController addPro
        if (!req.body.studio_name
             || !req.body.email
             || !req.body.password
             || !req.body.passwordConfirm
             || req.body.color === undefined
             || req.body.black_and_white === undefined) {
            return next(new InputError('Tous les champs doivent être remplis', { statusCode: 400 }));
        }

        // Vérification si l'email n'est pas au bon format
        if (!emailValidator.validate(req.body.email)) {
            return next(new InputError('Email invalide', { statusCode: 400 }));
        }

        // Vérication que le mot de passe soit bon
        if (req.body.password !== req.body.passwordConfirm) {
            return next(new InputError('Les deux mots de passe ne correspondent pas', { statusCode: 400 }));
        }

        const pro = await Pro.findOne({
            where: {
                email: req.body.email,
            },
        });
        if (pro) {
            return next(new ApiError('Utilisateur dejà existant sur le site', { statusCode: 500 }));
        }
        delete req.body.passwordConfirm;
        req.body.role = 'pro';
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashedPassword;

        const newPro = Pro.build(req.body);
        newPro.save();

        return res.status(200).json(newPro); //! renvoyer le pro !?
    },
    async signupConsumer(req, res, next) {
        // if (!req.body.last_name
        //     || !req.body.first_name
        //     || !req.body.email
        //     || !req.body.password
        //     || !req.body.passwordConfirm
        //     || !req.body.date_of_birth) {
        //     return next(new InputError('Tous les champs doivent être remplis', { statusCode: 400 }));
        // }

        // if (!emailValidator.validate(req.body.email)) {
        //     return next(new InputError('Email invalide', { statusCode: 400 }));
        // }

        // if (req.body.password !== req.body.passwordConfirm) {
        //     return next(new InputError('Les deux mots de passe ne correspondent pas', { statusCode: 400 }));
        // }
        // //! TODO gerer ça
        // // const consumer = await Consumer.findOne({
        // //     where: {
        // //         email: req.body.email,
        // //     },
        // // });
        // // if (consumer) {
        // //     return next(new ApiError('Utilisateur dejà existant
        // // sur le site avec cet email', { statusCode: 500 }));
        // // }
        // return res.status(200).json('Compte Consumer créé'); //! ou renvoyer le pro !?
    },
    testConsumer(req, res) {
        res.json('Page autorisée seulement aux consumers');
    },

    testPro(req, res) {
        res.json('Page autorisée seulement aux pros');
    },

    async login(req, res, next) {
        // Verifier si c'est un pro
        const pro = await proController.getOnePro({
            where: {
                email: req.body.email,
            },
        });
        // Vérifier si c'est un utilisateur
        let consumer = await consumerController.getOneConsumer({
            where: {
                email: req.body.email,
            },
        });

        // ---------------!juste pour tester
        consumer = { email: 'a@a.com', password: '$2b$10$qYoUnMxLe07FG/2X/m2.MeSWC.Gzqaz2T/vuQvYJ4VC89pEKV2HPa' };
        //----------------

        if (!pro && !consumer) return next(new ApiError('Compte non existant', { statusCode: 500 }));
        const isGood = await bcrypt.compare(req.body.password, consumer.password);
        if (!isGood) return next(new InputError('Mot de passe erroné', { statusCode: 400 }));

        let accessToken;
        if (pro) {
            accessToken = jwt.sign({ email: pro.email, role: 'pro' }, process.env.JWT_PRO_SECRET);
        } else if (consumer) {
            accessToken = jwt.sign({ email: consumer.email, role: 'consumer' }, process.env.JWT_CONSUMER_SECRET);
        }
        return res.json({ accessToken }); // le token devra être stocké côté front pour connaitre
        // le role de l'utilisateur
    },
    logout(req, res) {
        // le TOKEN doit être supprimé des cookies
    },

};

module.exports = authController;
