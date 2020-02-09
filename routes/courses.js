import coursesController from "../controllers/courses";
import express from "express";

const router = express.Router();

// ############### ROUTES ##############

// GET courses
router.get("/courses", coursesController.allCourses);

// GET course
router.get("/course", coursesController.singleCourse);

// POST course
router.post("/courses", coursesController.createCourse);

// POST course registration
router.post("/course-registration", coursesController.courseRegistration);

module.exports = router;
