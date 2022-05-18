const util  = require('util');
const notify= require(__path_configs + 'notify');

const options = {
    link: { min: 1, max: 100 },
    status: { value: 'novalue' },
    ordering: { min: 0, max: 20 },
    category: { min: 1, max: 30 },
    source: { min: 1, max: 30 },
}

module.exports = {
   
    validator: (req) => {
        // NAME
        req.checkBody('link', util.format(notify.ERROR_NAME, options.link.min, options.link.max) )
            .isLength({ min: options.link.min, max: options.link.max });

        // ORDERING
        req.checkBody('ordering', util.format(notify.ERROR_ORDERING, options.ordering.min, options.ordering.max))
            .isInt({gt: options.ordering.min, lt: options.ordering.max});
        
        // STATUS
        req.checkBody('status', notify.ERROR_STATUS)
            .isNotEqual(options.status.value);

        // CATEGORY
        req.checkBody('category', util.format(notify.ERROR_NAME, options.category.min, options.category.max) )
            .isLength({ min: options.category.min, max: options.category.max });

        // SOURCE
        req.checkBody('source', util.format(notify.ERROR_NAME, options.source.min, options.source.max) )
            .isLength({ min: options.source.min, max: options.source.max });

        let errors = req.validationErrors() !== false ? req.validationErrors() : [];
        return errors;
    }
}