const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Message extends Model {}

Message.init({
    content: DataTypes.TEXT,
}, {
    sequelize,
    tableName: 'message',
});

module.exports = Message;
