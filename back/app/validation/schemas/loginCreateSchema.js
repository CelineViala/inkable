const Joi = require('joi');

module.exports = Joi.object({

    password: Joi.string().min(8)
        .required()
        .messages({
            'string.min': 'Le mot de passe fait 8 caractères minimum',
            'string.empty': 'Le champ mot de passe doit être rempli',
            'any.required': 'Le champ mot de passe est un champ obligatoire',
        }),

    email: Joi.string()
        .required()
        .messages({
            'string.empty': 'Le champ email doit être rempli',
            'any.required': 'Le champ email est un champ obligatoire',
        }),

});
