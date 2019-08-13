import coursesController from '../controllers/courses';
import express from 'express';

const router  = express.Router();

// ############### ROUTES ##############

// GET homepage
router.get( '/', coursesController.home );

module.exports = router