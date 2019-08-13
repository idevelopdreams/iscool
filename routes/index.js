//route manager
import express from 'express';
import courses  from './courses';
import user from './user';

const router  = express.Router();

router.use(courses);
router.use(user);

module.exports = router;