const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Pro extends Model{}

Pro.init({
    // id:{
    //     type:DataTypes.INTEGER,
    //     autoIncrement:true,
    //     primaryKey:true,
    // },
    studio_name :DataTypes.TEXT,
    email:DataTypes.TEXT,
    password:DataTypes.TEXT,
    profile_picture_path_pro: DataTypes.TEXT,
    description: DataTypes.TEXT,
    instagram: DataTypes.TEXT,
    color: DataTypes.BOOLEAN,
    black_and_white: DataTypes.BOOLEAN,
    role: DataTypes.TEXT
    
},{
    sequelize,
    tableName:'pro'
})

module.exports=Pro;