import coursesController from '../controllers/courses';
import express from 'express';

const router  = express.Router();

// ############### ROUTES ##############

// GET home page
router.get( '/', coursesController.home );

module.exports = router