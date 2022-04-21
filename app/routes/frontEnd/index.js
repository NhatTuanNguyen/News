const express = require('express');
const router = express.Router();

router.use('/',require('./home'));
router.use('/category', require('./category'));
router.use('/post', require('./post'));
router.post('/upload',(req, res) => {
    console.log(req.file);
});

module.exports = router;