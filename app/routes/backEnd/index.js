var express = require('express');
var router = express.Router();

const middleAuthentication = require(__path_middleware + 'auth');

router.use('/',require('./dashboard'));
router.use('/dashboard',require('./dashboard'));
router.use('/items',require('./items'));
router.use('/category',require('./category'));
router.use('/groups',require('./groups'));
router.use('/users',require('./users'));
router.use('/article',require('./article'));
router.use('/settings',require('./settings'));
router.use('/general-news',require('./generalNews'));

module.exports = router;
