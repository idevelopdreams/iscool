import express from "express";
import staticController from "../controllers/staticController";

const isAuthenticated = require("../config/middleware/isAuthenticated");

const router = express.Router();

// GET login
router.get("/user/login", staticController.userLogin);

router.get("/user/signup", staticController.register);

// dummy route
router.get("/courses/1", isAuthenticated, staticController.singleCourse);

module.exports = router;
