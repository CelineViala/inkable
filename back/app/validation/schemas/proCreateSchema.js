const Joi = require('joi');

module.exports = Joi.object({
    studio_name: Joi.string()
        .required(),
    password: Joi.string()
        .required(),
    profile_picture_path_pro: Joi.string(),
    description: Joi.string(),
    instagram: Joi.string(),
    color: Joi.boolean().required(),
    black_and_white: Joi.boolean().required(),
    role: Joi.string(),
    city: Joi.string().required(),
});
