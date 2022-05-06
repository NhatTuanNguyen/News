const express = require('express');
const router = express.Router();
const middlewareGetInfo = require(__path_middleware + 'getUserInfo');
const middlewareGetCategoryForMenu = require(__path_middleware + 'getCategoryForMenu');
const middlewareGetArticleRandom = require(__path_middleware + 'getArticleRandom');

router.use('/auth',require('./auth'));
router.use('/',middlewareGetInfo,middlewareGetCategoryForMenu,middlewareGetArticleRandom,require('./home'));
router.use('/category', require('./category'));
router.use('/post', require('./post'));
router.use('/contact', require('./contact'));
router.use('/article', require('./article'));

module.exports = router;