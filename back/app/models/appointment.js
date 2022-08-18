const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Appointment extends Model {}

Appointment.init({
    title: DataTypes.TEXT,
    note: DataTypes.TEXT,
    beginning_hour: DataTypes.DATE,
    ending_hour: DataTypes.DATE,
}, {
    sequelize,
    tableName: 'appointment',
});

module.exports = Appointment;
