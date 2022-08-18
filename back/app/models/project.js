const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Project extends Model {}

Project.init({
    title: DataTypes.TEXT,
    description: DataTypes.TEXT,
    status: DataTypes.TEXT,
    color: DataTypes.BOOLEAN,
    area: DataTypes.TEXT,

}, {
    sequelize,
    tableName: 'project',
});

module.exports = Project;
