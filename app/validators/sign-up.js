const util  = require('util');
const notify= require(__path_configs + 'notify');

const options = {
    name: { min: 4, max: 30 },
}

module.exports = {
    validator: (req) => {
        // NAME
        req.checkBody('username', util.format(notify.ERROR_NAME, options.name.min, options.name.max) )
            .isLength({ min: options.name.min, max: options.name.max })

        // PASSWORD
        req.checkBody('password', notify.ERROR_NOTEMPTY )
            .notEmpty();
        let errors = req.validationErrors() !== false ? req.validationErrors() : [];

        return errors;
    }
} 