const jwt = require('jsonwebtoken');
const emailValidator = require('email-validator');
const consumerController = require('./consumerController');
const proController = require('./proController');
const { Pro } = require('../models');
const InputError = require('../errors/inputError');
const ApiError = require('../errors/apiError');

const authController = {

    async signupPro(req, res, next) {
        if (!req.body.studio_name
             || !req.body.email
             || !req.body.password
             || !req.body.passwordConfirm
             || req.body.couleur === undefined
             || req.body.black_and_white === undefined) {
            // errors.push('Vous devez remplir tous les champs !');
            return next(new InputError('Tous les champs doivent être remplis', { statusCode: 400 }));
        }

        // Vérification si l'email n'est pas au bon format
        if (!emailValidator.validate(req.body.email)) {
            // errors.push("L'email n'est pas valide !");
            return next(new InputError('Email invalide', { statusCode: 400 }));
        }

        // Vérication que le mot de passe soit bon
        if (req.body.password !== req.body.passwordConfirm) {
            // errors.push('Les deux mots de passes ne correspondent pas !');
            return next(new InputError('Les deux mots de passe ne correspondent pas', { statusCode: 400 }));
        }

        // Vérifie si le pro existe déjà ou non dans la BDD
        const pro = await Pro.findOne({
            where: {
                email: req.body.email,
            },
        });

        // si il trouve un pro déjà existant en BDD via l'email,
        // alors c'est que le pro est déjà inscrit !
        if (pro) {
            // errors.push('Un utilisateur inscrit sur le site possède déjà cette adresse email !');
            return next(new ApiError('Utilisateur dejà existant sur le site', { statusCode: 500 }));
        }
        //! TODO : INSERER LE PRO EN BDD si TOUT eST OK
        // S'il y a des erreurs, on renvoit le formulaire en montrant les erreurs
        //  if (errors.length > 0) return res.render('signup', { errors });

        return res.status(200).json('Compte Pro créé'); //! renvoyer le pro !?
    },
    async signupConsumer(req, res, next) {
        if (!req.body.last_name
            || !req.body.first_name
            || !req.body.email
            || !req.body.password
            || !req.body.passwordConfirm
            || !req.body.date_of_birth) {
            return next(new InputError('Tous les champs doivent être remplis', { statusCode: 400 }));
        }

        if (!emailValidator.validate(req.body.email)) {
            return next(new InputError('Email invalide', { statusCode: 400 }));
        }

        if (req.body.password !== req.body.passwordConfirm) {
            return next(new InputError('Les deux mots de passe ne correspondent pas', { statusCode: 400 }));
        }
        //! TODO gerer ça
        // const consumer = await Consumer.findOne({
        //     where: {
        //         email: req.body.email,
        //     },
        // });
        // if (consumer) {
        //     return next(new ApiError('Utilisateur dejà existant
        // sur le site avec cet email', { statusCode: 500 }));
        // }
        return res.status(200).json('Compte Consumer créé'); //! ou renvoyer le pro !?
    },
    testConsumer(req, res) {
        res.json('Page autorisée seulement aux consumers');
    },

    testPro(req, res) {
        res.json('Page autorisée seulement aux pros');
    },

    async login(req, res) {
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
        //! TODO : CHECK PASSWORD
        consumer = { email: 'a@a.com', password: 123 };
        const accessTokenSecretConsumer = 'accessConsumer';
        const accessTokenSecretPro = 'accessPro';
        let accessToken;
        if (pro) {
            accessToken = jwt.sign({ email: pro.email, role: 'pro' }, accessTokenSecretPro);
        } else if (consumer) {
            accessToken = jwt.sign({ email: consumer.email, role: 'consumer' }, accessTokenSecretConsumer);
        } else {
            return res.send('Username or password incorrect');
        }
        return res.json({ accessToken });
    },
    logout(req, res) {
        // déconnexion
    },

};

module.exports = authController;
