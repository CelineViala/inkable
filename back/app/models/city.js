const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class City extends Model {}

City.init({
    // id:{
    //     type:DataTypes.INTEGER,
    //     autoIncrement:true,
    //     primaryKey:true,
    // },
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: '',
    },
    zipcode: {
        type: DataTypes.TEXT,
        allowNull: false,
        dafaultValue: '',
    },

}, {
    sequelize,
    tableName: 'city',
});

module.exports = City;
