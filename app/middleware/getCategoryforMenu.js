var categoryModel = require(__path_models + 'category');

module.exports = async (req, res, next) => {
    // Category
    await categoryModel.listItemsFrontend(null, { task: 'itemsCategory' }).then((items) => {
        res.locals.itemsCategory = items
    });
    next();
}