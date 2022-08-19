const Joi = require('joi');

module.exports = Joi.object({
    email: Joi.string(),
    first_name: Joi.string(),
    last_name: Joi.string(),
    password: Joi.string().min(8),
    profile_picture_path_pro: Joi.string(),
    date_of_birth: Joi.string(),
    role: Joi.string(),
});
