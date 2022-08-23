const Joi = require('joi');

module.exports = Joi.object({
    studio_name: Joi.string(),
    password: Joi.string(),
    profile_picture_path_pro: Joi.string(),
    description: Joi.string(),
    instagram: Joi.string(),
    color: Joi.boolean(),
    black_and_white: Joi.boolean(),
    role: Joi.string(),
    city_id: Joi.number().integer().min(1),
});