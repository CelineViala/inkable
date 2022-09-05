const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Pro extends Model {}

/**
 * @typedef {object} Pro
 * @property {number} id - Indentifiant unique, Pk de la table
 * @property {text} studio_name - Nom du studio du pro
 * @property {text} city - Ville où se trouve le studio
 * @property {text} email - Email du pro
 * @property {text} password - Mot de passe du pro
 * @property {text} profile_picture_path_pro - URL pour accéder à la photo de profil
 * @property {text} description - Courte présentation du salon faite par le pro
 * @property {text} instagram - URL pour accéder au compte instagram du pro
 * @property {boolean} color - Sélectioné si le pro fait de la couleur
 * @property {boolean} black_and_white - Sélectionné si le pro fait du noir et blanc
 * @property {text} role - Attribut qui va définir le fait qu'il soit pro
 */

Pro.init({
    studio_name: DataTypes.TEXT,
    city: DataTypes.TEXT,
    email: DataTypes.TEXT,
    password: DataTypes.TEXT,
    profile_picture_path_pro: DataTypes.TEXT,
    description: DataTypes.TEXT,
    instagram: DataTypes.TEXT,
    color: DataTypes.BOOLEAN,
    black_and_white: DataTypes.BOOLEAN,
    role: DataTypes.TEXT,
}, {

    sequelize,
    tableName: 'pro',
});

module.exports = Pro;
