const Joi = require('joi');

module.exports = Joi.object({
    studio_name: Joi.string()
        .required(),
    password: Joi.string().min(8)
        .required(),

    passwordConfirm: Joi.string().valid(Joi.ref('password')).required(),
    profile_picture_path_pro: Joi.string(),
    email: Joi.string().email().required(),
    description: Joi.string(),
    instagram: Joi.string(),
    color: Joi.boolean().required(),
    black_and_white: Joi.boolean().required(),
    role: Joi.string(),
    city: Joi.string().required(),
});
