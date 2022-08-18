const Appointement = require('./appointement');
const City = require('./city');
const Consumer = require('./consumer');
const Message = require('./message');
const Pro = require('./pro');
const Project = require('./project');
const Style = require('./style');
const Tatoo = require('./tatoo');

Message.belongsTo(Project, {
    as: 'project',
    foreignKey: 'project_id',
});

Project.hasMany(Message, {
    as: 'messages',
    foreignKey: 'project_id',
});

Project.belongsTo(Consumer, {
    as: 'consumer',
    foreignKey: 'consumer_id',
});

Consumer.hasMany(Project, {
    as: 'projects',
    foreignKey: 'consumer_id',
});

Appointement.belongsTo(Project, {
    as: 'project',
    foreignKey: 'project_id',
});

Project.hasMany(Appointement, {
    as: 'appointments',
    foreignKey: 'project_id',
});

Project.belongsTo(Pro, {
    as: 'pro',
    foreignKey: 'pro_id',
});

Pro.hasMany(Project, {
    as: 'projects',
    foreignKey: 'pro_id',
});

Pro.belongsTo(City, {
    as: 'city',
    foreignKey: 'city_id',
});

City.hasMany(Pro, {
    as: 'pros',
    foreignKey: 'city_id',
});

Appointement.belongsTo(Pro, {
    as: 'pro',
    foreignKey: 'pro_id',
});

Pro.hasMany(Appointement, {
    as: 'appointments',
    foreignKey: 'pro_id',
});

Tatoo.belongsTo(Pro, {
    as: 'pro',
    foreignKey: 'pro_id',
});

Pro.hasMany(Tatoo, {
    as: 'tatoos',
    foreignKey: 'pro_id',
});

Style.belongsToMany(Pro, {
    as: 'pros',
    through: 'categorise',
    foreignKey: 'style_id',
    otherKey: 'pro_id',
    updatedAt: false,
});

Pro.belongsToMany(Style, {
    as: 'styles',
    through: 'categorise',
    foreignKey: 'pro_id',
    otherKey: 'style_id',
    updatedAt: false,
});

module.exports = {
    Appointement,
    City,
    Consumer,
    Message,
    Pro,
    Project,
    Style,
    Tatoo,
};
