const Joi = require('joi');
const ApiError = require('../../errors/apiError');

module.exports = Joi.object({
    studio_name: Joi.string()
        .required()
        .messages({
            'string.base': 'Le nom de studio doit être de type texte',
            'string.empty': 'Le nom de studio doit être rempli',
            'any.required': 'Le nom de studio est un champ obligatoire',
        }),
    password: Joi.string().min(8)
        .required()
        .error(() => new ApiError('Le mot de passe doit faire 8 caractères minimum')),

    passwordConfirm: Joi.string()
        .valid(Joi.ref('password'))
        .required()
        .error(() => new Error('Erreur liée à la confirmation du mot de passe')),
    profile_picture_path_pro: Joi.string(),
    email: Joi.string()
        .email()
        .required()
        .messages({
            'string.email': 'L`email est invalide',
            'string.empty': 'Le champ email doit être rempli',
            'any.required': 'Le champ email est un champ obligatoire',
        }),

    description: Joi.string(),
    instagram: Joi.string(),
    color: Joi.boolean().required(),
    black_and_white: Joi.boolean().required(),
    role: Joi.string(),
    city: Joi.string().required(),
});
