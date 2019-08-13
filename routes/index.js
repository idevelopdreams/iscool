//route manager
import express from 'express';
import courses  from './course';
import user from './user';

const router  = express.Router();

router.use(courses);
router.use(user);

module.exports = router;