const Joi = require('joi');

module.exports = Joi.object({
    tattoo_picture_path: Joi.string()
        .required()
        .messages({
            'string.required': 'Erreur format fichier',
            'string.empty': 'Erreur format fichier',
        }),
    pro_id: Joi.number().integer().min(1).required(),
});
