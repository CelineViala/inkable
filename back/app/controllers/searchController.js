const {
    Style,
} = require('../models');
const client = require('../config/db');

module.exports = {

    async getAllStyles(req, res) {
        const styles = await Style.findAll();
        return res.json(styles);
    },

    async getAllCities(req, res) {
        const data = await client.query('SELECT DISTINCT city FROM pro');
        console.log(data[0]);
        return res.json(data);
    },

};
