var express = require('express');
var router = express.Router();
var articleModel = require(__path_models + 'article');
var categoryModel = require(__path_models + 'category');

const folderView = __path_views_blog + 'pages/home/';
const layoutBlog = __path_views_blog + 'frontend';

/* GET home page. */
router.get('/', async function(req, res, next) {

  let itemsSpecial = [];
  let itemsNew = [];
  let itemsCategory = [];
  let itemsRandom = [];

  // Special
  await articleModel.listItemsFrontend(null,{task:'itemsSpecial'}).then((items) => {
    itemsSpecial = items
  });
  // Last news
  // await articleModel.listItemsFrontend(null,{task:'itemsNew'}).then((items) => {
  //   itemsNew = items
  // });
  // Category
  await categoryModel.listItemsFrontend(null,{task:'itemsCategory'}).then((items) => {
    itemsCategory = items
  });
  // items random
  // await articleModel.listItemsFrontend(null,{task:'itemsRandom'}).then((items) => {
  //   itemsRandom = items
  // });

  res.render(`${folderView}index`,{
    layout:layoutBlog,
    top_post:true,
    items:itemsSpecial,
    // itemsNew,
    itemsCategory,
    // itemsRandom,
  });
});


module.exports = router;
