const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Style extends Model {}

Style.init({
    name: DataTypes.TEXT,
}, {
    sequelize,
    tableName: 'style',
});

module.exports = Style;
