var express = require('express');
var router = express.Router();
var categoryModel = require(__path_models + 'category');
var articleModel = require(__path_models + 'article');
const paramsHelper = require(__path_helpers + 'params');

const folderView = __path_views_blog + 'pages/category/';
const layoutBlog = __path_views_blog + 'frontend';

/* GET home page. */
router.get('/:id', async function (req, res, next) {
  let itemsCategory = [];
  let itemsInCategory = [];
  let itemsRandom = [];
  let category = [];
  let idCategory = paramsHelper.getParams(req.params, 'id', '');
  await categoryModel.listItemsFrontend(null, { task: 'itemsCategory' }).then((items) => {
    itemsCategory = items
  });

  await articleModel.listItemsFrontend({ id: idCategory }, { task: 'itemsInCategory' }).then((items) => {
    itemsInCategory = items
  });

  await categoryModel.listItemsFrontend({ id: idCategory }, { task: 'category' }).then((items) => {
    category = items
  });
  // items random
  await articleModel.listItemsFrontend(null, { task: 'itemsRandom' }).then((items) => {
    itemsRandom = items
  });

  res.render(`${folderView}index`, {
    layout: layoutBlog,
    top_post: false,
    category,
    itemsCategory,
    itemsInCategory,
    itemsRandom,
  });
});


module.exports = router;
