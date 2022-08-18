const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Tatoo extends Model {}

Tatoo.init({
    tatoo_picture_path: DataTypes.TEXT,
}, {
    sequelize,
    tableName: 'tatoo',
});

module.exports = Tatoo;
