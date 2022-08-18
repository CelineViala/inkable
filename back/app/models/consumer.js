const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Consumer extends Model {}

Consumer.init({
    email: DataTypes.TEXT,
    first_name: DataTypes.TEXT,
    last_name: DataTypes.TEXT,
    password: DataTypes.TEXT,
    profile_picture_path_consumer: DataTypes.TEXT,
    date_of_birth: DataTypes.DATEONLY,
    role: DataTypes.TEXT,
}, {
    sequelize,
    tableName: 'consumer',
});

module.exports = Consumer;
