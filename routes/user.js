const express = require('express');
const router  = express.Router();

//parsing form data
const bodyParser = require('body-parser');
const readForm = bodyParser.urlencoded({extended: false})

// GET login
router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router