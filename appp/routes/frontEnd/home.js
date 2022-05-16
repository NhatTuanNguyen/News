var express = require('express');
var router = express.Router();
var articleModel = require(__path_models + 'article');

const folderView = __path_views_blog + 'pages/home/';
const layoutBlog = __path_views_blog + 'frontend';

/* GET home page. */
router.get('/', async function(req, res, next) {

  let itemsSpecial = [];
  let itemsNew = [];

  // Special
  await articleModel.listItemsFrontend(null,{task:'itemsSpecial'}).then((items) => {
    itemsSpecial = items
  });
  // Last news
  await articleModel.listItemsFrontend(null,{task:'itemsNew'}).then((items) => {
    itemsNew = items
  });
  

  res.render(`${folderView}index`,{
    layout:layoutBlog,
    top_post:true,
    items:itemsSpecial,
    itemsNew,
    // itemsRandom,
  });
});


module.exports = router;
