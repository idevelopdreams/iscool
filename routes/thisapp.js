const express = require('express');
const router  = express.Router();
const thisappController = require('../controllers/thisapp');

// parsing form data
const bodyParser = require('body-parser');
const urlEncoded = bodyParser.urlencoded({extended: false})

// ############### ROUTES ##############

// Get for tasks: returns all tasks
router.get( '/', thisappController.home );

module.exports = router