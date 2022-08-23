const Joi = require('joi');

module.exports = Joi.object({
    title: Joi.string()
        .required(),
    note: Joi.string(),
    beginning_hour: Joi.date().required(),
    ending_hour: Joi.date().required(),
    pro_id: Joi.number().integer().min(1).required(),
    project_id: Joi.number().integer().min(1),
});
