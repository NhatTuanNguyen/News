const express = require('express');
const router = express.Router();
const middlewareGetInfo = require(__path_middleware + 'get-user-info');
const middlewareGetCategoryForMenu = require(__path_middleware + 'get-category-for-menu');
const middlewareGetArticleRandom = require(__path_middleware + 'get-article-random');
const middlewareGetGoldCoinPrice = require(__path_middleware + 'gold-coin-price');
const middlewareGetSettings = require(__path_middleware + 'get-settings');

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
router.use('/general-news', require('./general-news'));

module.exports = router;