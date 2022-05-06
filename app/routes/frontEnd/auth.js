var express = require('express');

var router = express.Router();
var passport = require('passport');

const validatorLogin = require(__path_validators + 'login');
var systemConfig = require(__path_configs + 'system');
let linkIndex = `/`;
let linkLogin = `/auth/login`;
const folderView = __path_views_blog + 'pages/auth/';
const layoutLogin = __path_views_admin + 'login';

/* Gett logout page */
router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect(linkLogin)
});

/* Gett login page */
router.get('/login', (req, res, next) => {
  if (req.isAuthenticated()) res.redirect(linkIndex);
  let item = { email: '', 'password': '' };
  let errors = null;
  res.render(`${folderView}login`, { layout: layoutLogin, errors, item });
});

/* Gett logout page */
router.post('/login',
  (req, res, next) => {
    validatorLogin.validator(req);
    let item = req.body;
    let errors = req.validationErrors();
    if (errors) {
      res.render(`${folderView}login`, { layout: layoutLogin, errors, item })
    } else {
      passport.authenticate('local',{ failureRedirect: linkLogin,successRedirect: linkIndex,failureMessage: true})(req, res, next);
    }
});

router.get('/no-permission', (req, res, next) => {
  res.render(`${folderView}no-permission`,{layout: layoutLogin});
});



module.exports = router;