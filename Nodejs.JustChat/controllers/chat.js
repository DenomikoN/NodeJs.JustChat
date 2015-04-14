var express = require('express');
var router = express.Router();
var auth = require('../controllers/auth');

/* GET users listing. */
router.get('/', auth.authorized, function (req, res) {
    res.render('chat/index');
});

router.get('/channels', auth.authorized, function (req, res) { 
    res.json({ 2: 3 });
});


router.get('/channels/:id/messages', auth.authorized, function (req, res) {
    res.json({ 2: 3 });
});

module.exports = router;