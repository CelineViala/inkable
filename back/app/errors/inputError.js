module.exports = class InputError extends Error {
    constructor(message, infos) {
        super(message);

        this.name = 'InputError';

        this.infos = infos;
    }
};
