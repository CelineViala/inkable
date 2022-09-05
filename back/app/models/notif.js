const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Notif extends Model {}

/**
 * @typedef {object} Notif
 * @property {number} id - Indentifiant unique, Pk de la table
 * @property {text} code - Code de la notification
 * @property {text} name - Nom de la notification
 */

Notif.init({
    name: DataTypes.TEXT,
    code: DataTypes.TEXT,
}, {
    sequelize,
    tableName: 'notif',
});

module.exports = Notif;
