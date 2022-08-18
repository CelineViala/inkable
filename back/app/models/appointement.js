const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Appointement extends Model {}

Appointement.init({
    title: DataTypes.TEXT,
    note: DataTypes.TEXT,
    beginning_hour: DataTypes.DATE,
    ending_hour: DataTypes.DATE,
}, {
    sequelize,
    tableName: 'appointement',
});

module.exports = Appointement;
