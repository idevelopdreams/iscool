import moduleController from "../controllers/modules";
import express from "express";

const router = express.Router();

// ############### ROUTES ##############

// Get modules
router.get("/modules", moduleController.allModules);

// Get module
router.get("/module", moduleController.singleModule);

// Post module
router.get("/module", moduleController.createModule);

module.exports = router;
