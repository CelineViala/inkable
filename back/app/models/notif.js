const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Notif extends Model {}

Notif.init({
    name: DataTypes.TEXT,
}, {
    sequelize,
    tableName: 'notif',
});

module.exports = Notif;
