var express = require('express');

var router = express.Router();
var passport = require('passport');

const validatorSignIn = require(__path_validators + 'sign-in');
var usersModel = require(__path_models + 'users');
var notify = require(__path_configs + 'notify');
var systemConfig = require(__path_configs + 'system');
let linkIndex = `/`;
let linkLogin = `/auth/login`;
const folderView = __path_views_blog + 'pages/sign-in/';
const layoutLogin = __path_views_admin + 'login';


/* Get sign in page */
router.get('/', (req, res, next) => {
  let item = {};
  let errors = null;
  res.render(`${folderView}index`, { layout: layoutLogin, errors, item });
});

/* Gett logout page */
router.post('/', (req, res, next) => {
  let errors = validatorSignIn.validator(req);
  let item = Object.assign(req.body);

  if (errors.length <= 0) {
    item.name = item.username;
    item.status = 'active';
    item.ordering = 1;
    usersModel.saveItems(item, 'sign-in').then(() => {
      req.flash('success', notify.SIGN_IN_SUCCESS, false);
      res.redirect(linkLogin);
    });
  } else {
    res.render(`${folderView}index`, { layout: layoutLogin, errors, item });
  }
});



module.exports = router;