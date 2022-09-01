const Joi = require('joi');

module.exports = Joi.object({
    email: Joi.string(),
    first_name: Joi.string(),
    last_name: Joi.string(),
    password: Joi.string().min(8),
    passwordConfirm: Joi.string()
        .valid(Joi.ref('password'))
        .error(() => new Error('Erreur liée à la confirmation du mot de passe')),
    profile_picture_path_consumer: Joi.string().allow(null),
    date_of_birth: Joi.string(),
    role: Joi.string(),
});
