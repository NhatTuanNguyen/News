const util  = require('util');
const notify= require(__path_configs + 'notify');

const options = {
    username: { min: 4, max: 30 },
    password: { min: 1, max: 50 },
}

module.exports = {
   
    validator: (req) => {
        // NAME
        req.checkBody('username', util.format(notify.ERROR_NAME, options.username.min, options.username.max) )
            .isLength({ min: options.username.min, max: options.username.max })

        // PASSWORD
        req.checkBody('password', notify.ERROR_NOTEMPTY )
            .notEmpty();
    }
}