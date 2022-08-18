const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Tattoo extends Model {}

Tattoo.init({
    tattoo_picture_path: DataTypes.TEXT,
}, {
    sequelize,
    tableName: 'tattoo',
});

module.exports = Tattoo;
