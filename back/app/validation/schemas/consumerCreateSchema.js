const Joi = require('joi');

module.exports = Joi.object({
    email: Joi.string().email()
        .required(),
    first_name: Joi.string()
        .required(),
    last_name: Joi.string().required(),
    password: Joi.string().min(8).required(),
    passwordConfirm: Joi.string().valid(Joi.ref('password')).required(),
    profile_picture_path_pro: Joi.string(),
    date_of_birth: Joi.string().required(),
    role: Joi.string(),
});
