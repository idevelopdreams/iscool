import express from "express";
import userController from "../controllers/user";

const router = express.Router();

// GET login
router.get("/login", userController.userLogin);

router.post("/login", userController.userSignin);

router.get("/signup", userController.register);

router.post("/signup", userController.signup);

router.get("/logout", userController.logout);

module.exports = router;
