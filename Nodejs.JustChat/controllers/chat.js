var express = require('express');
var router = express.Router();
var auth = require('../controllers/auth');

/* GET users listing. */
router.get('/', auth.authorized, function (req, res) {
    res.render('chat/index');
});



module.exports = router;