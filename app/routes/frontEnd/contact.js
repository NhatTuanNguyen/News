var express = require('express');
var router = express.Router();
var contactModel = require(__path_models + 'contact');
const Swal = require('sweetalert2');

let linkIndex = '/contact';
var notify = require(__path_configs + 'notify');
const folderView = __path_views_blog + 'pages/contact/';
const layoutBlog = __path_views_blog + 'frontend';

/* GET home page. */
router.get('/', async function (req, res, next) {

  res.render(`${folderView}index`, {
    layout: layoutBlog,
    top_post: false,
  });
});

router.post('/save', (req, res) => {
  let item = Object.assign(req.body);
  contactModel.saveItems(item).then(() => {
    
    req.flash('success', notify.ADD_SUCCESS_FEEDBACK, false);
    res.redirect(linkIndex);
  })
})

module.exports = router;
