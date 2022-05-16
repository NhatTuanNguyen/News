var express = require('express');
var router = express.Router();
var articleModel = require(__path_models + 'article');
const paramsHelper = require(__path_helpers + 'params');

const folderView = __path_views_blog + 'pages/article/';
const layoutBlog = __path_views_blog + 'frontend';

/* GET home page. */
router.get('/:category/:article', async function (req, res, next) {
  let itemArticle = [];
  let slugArticle = paramsHelper.getParams(req.params, 'article', '');

  // item Article
  await articleModel.getItemFrontend({slugArticle}).then((items) => {
    itemArticle = items[0]
  });


  res.render(`${folderView}index`, {
    layout: layoutBlog,
    top_post: false,
    // category,
    itemArticle,
  });
});


module.exports = router;
