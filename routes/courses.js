import coursesController from "../controllers/courses";
import express from "express";

const router = express.Router();

// ############### ROUTES ##############

// GET courses
router.get("/courses", coursesController.allCourses);

// GET course
router.get("/course/:id", coursesController.singleCourse);

// POST course
router.post("/courses", coursesController.createCourse);

// DELETE course
router.delete("/course/:id", coursesController.destroyCourse);

// POST course registration
router.post("/course-registration", coursesController.courseRegistration);

// DELETE course registration
router.delete("/course-registration/:id", coursesController.unregister);

// POST course module
router.post("/course-module", coursesController.createCourseModule);

module.exports = router;
