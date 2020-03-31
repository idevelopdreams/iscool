import express from "express";
import userController from "../controllers/user";
const validCourse = require("../config/middleware/validCourse");

const router = express.Router();

// GET login
router.get("/login", userController.userLogin);

router.post("/login", userController.userSignin);

router.get("/signup", userController.register);

router.post("/signup", validCourse, userController.signup);

router.get("/logout", userController.logout);

router.delete("/user/:id", userController.deleteAccount);

module.exports = router;
