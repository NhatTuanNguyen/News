const express = require('express');
const router = express.Router();
const middlewareGetInfo = require(__path_middleware + 'getUserInfo');
const middlewareGetCategoryForMenu = require(__path_middleware + 'getCategoryForMenu');
const middlewareGetArticleRandom = require(__path_middleware + 'getArticleRandom');
const middlewareGetGoldCoinPrice = require(__path_middleware + 'goldCoinPrice');
const middlewareGetSettings = require(__path_middleware + 'getSettings');

router.use('/auth',require('./auth'));
router.use('/',
    middlewareGetInfo,
    middlewareGetCategoryForMenu,
    middlewareGetArticleRandom,
    middlewareGetGoldCoinPrice,
    middlewareGetSettings,
    require('./home'));
router.use('/category', require('./category'));
router.use('/post', require('./post'));
router.use('/lien-he', require('./contact'));
router.use('/article', require('./article'));
router.use('/general-news', require('./generalNews'));

module.exports = router;