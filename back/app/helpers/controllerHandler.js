// Funtion factory permettant d'injecter le controller dans notre middleware d'impléméntation de
// try…catch…
function controllerHandler(controller) {
    return async (req, res, next) => {
        try {
            await controller(req, res, next);
        } catch (err) {
            next(err);
        }
    };
}

module.exports = controllerHandler;
