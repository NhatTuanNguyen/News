var articleModel = require(__path_models + 'article');

module.exports = async (req, res, next) => {
    // items random
    await articleModel.listItemsFrontend(null, { task: 'itemsRandom' }).then((items) => {
        res.locals.itemsRandom = items
    });

    next();
}