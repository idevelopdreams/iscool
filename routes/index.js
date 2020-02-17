//route manager
import express from "express";
import courses from "./courses";
import user from "./user";

const router = express.Router();

// routes for courses
router.use(courses);

// routes for courses
router.use(user);

module.exports = router;
