//route manager
import express from "express";
import courses from "./courses";
import user from "./user";
import modules from "./modules";
import statics from "./statics";

const router = express.Router();

// routes for courses
router.use(courses);

//routes for modules
router.use(modules);

// routes for courses
router.use(user);

// routes for static pages
router.use(statics);

module.exports = router;
