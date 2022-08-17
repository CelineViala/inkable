// eslint-disable-next-line no-unused-vars
const errorHandler = (err, _, res, next) => {
    const { message, infos } = err;
    res.status(infos.statusCode).json({
        status: 'error',
        statusCode: infos.statusCode,
        message,
    });
};

module.exports = {
    errorHandler,
};
