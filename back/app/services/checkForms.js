const bcrypt = require('bcrypt');
const ApiError = require('../errors/apiError');

module.exports = {
    async hashPassword(password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword;
    },
    async checkPassword(userPassword, dbPassword) {
        const isOk = await bcrypt.compare(userPassword, dbPassword);
        return isOk;
    },
    async checkUnicity(model, userEmail) {
        const user = await model.findOne({
            where: {
                email: userEmail,
            },
        });
        if (user) return new ApiError('Utilisateur dejà existant sur le site', { statusCode: 500 });
        return false;
    },
    async findUser(model, userEmail) {
        console.log(model,userEmail)
        const user = await model.findOne({
            where: {
                email: userEmail,
            },
        });
        console.log(user);
        return user;
    },
};
