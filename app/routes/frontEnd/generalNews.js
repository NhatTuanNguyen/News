var express = require('express');
var router = express.Router();
let Parser = require('rss-parser');
let parser = new Parser();
var parserHtml = require('node-html-parser');


var generalNewsModel = require(__path_models + 'generalNews');
const paramsHelper = require(__path_helpers + 'params');

const folderView = __path_views_blog + 'pages/generalNews/';
const layoutBlog = __path_views_blog + 'frontend';

/* GET home page. */
router.get('/:slug', async function (req, res, next) {
  let linkRss ='';
  let slugGeneralNews = paramsHelper.getParams(req.params, 'slug', '');

  await generalNewsModel.getItemsFromSlug(slugGeneralNews).then((items) => {
    linkRss = items[0].link;
  });
  parser.parseURL(linkRss,(err, feed) => {
    if(err){
      res.render(__path_views_blog + 'pages/error', {
        pageTitle: 'Page Not Found',
        top_post:false,
        layout: false,
      });
    } else{
      feed['items'].forEach((item)=>{
        item.linkImage = parserHtml.parse(item.content).querySelector('img').getAttribute('src');
      });
    
      res.render(`${folderView}index`, {
        layout: layoutBlog,
        top_post: false,
        items:feed.items,
      });
    }
  });
});


module.exports = router;
