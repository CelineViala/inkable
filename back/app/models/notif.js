const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Notif extends Model {}

Notif.init({
    name: DataTypes.TEXT,
    code: DataTypes.TEXT,
}, {
    sequelize,
    tableName: 'notif',
});

module.exports = Notif;
