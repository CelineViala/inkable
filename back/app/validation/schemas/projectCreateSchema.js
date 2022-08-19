const Joi = require('joi');

module.exports = Joi.object({
    title: Joi.string()
        .required(),
    description: Joi.string()
        .required(),
    profile_picture_path_pro: Joi.string(),
    status: Joi.string(),
    color: Joi.boolean().required(),
    area: Joi.string().required(),
    pro_id: Joi.number().integer().min(1).required(),
    consumer_id: Joi.number().integer().min(1).required(),
});
