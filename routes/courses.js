import coursesController from "../controllers/courses";
import express from "express";

const router = express.Router();

// ############### ROUTES ##############

// GET homepage
router.get("/courses", coursesController.allCourses);

// GET course
router.get("/courses/:id", coursesController.singleCourse);

// POST courses
router.post("/courses", coursesController.createCourse);

module.exports = router;
