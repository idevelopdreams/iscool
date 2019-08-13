//route manager
const express = require('express');
const thisapp    = require('./thisapp');
const user    = require('./user');

const router  = express.Router();

router.use(thisapp);
// router.use(user);

module.exports = router;