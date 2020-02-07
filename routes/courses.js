import coursesController from "../controllers/courses";
import express from "express";

const router = express.Router();

// ############### ROUTES ##############

// GET homepage
router.get("/", coursesController.home);

// GET course
router.get("/courses/1", coursesController.singleCourse);

// POST courses
router.post("/courses", coursesController.createCourse);

module.exports = router;
