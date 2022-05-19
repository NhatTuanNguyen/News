var categoryModel = require(__path_models + 'category');
var generalNewsModel = require(__path_models + 'general-news');

module.exports = async (req, res, next) => {
    //Category
    await categoryModel.listItemsFrontend(null, { task: 'itemsCategory' }).then((items) => {
        res.locals.itemsCategory = items
    });

    // Category Parrent
    // await categoryModel.listItemsFrontend(null, { task: 'itemsCategoryParent' }).then((items) => {
    //     res.locals.itemsCategoryParent = items
    // });

    // generalNewsCategory
    await generalNewsModel.listItemsFrontend(null, { task: 'generalNewsCategory' }).then((items) => {
        res.locals.generalNewsCategory = items
    });
    next();
}