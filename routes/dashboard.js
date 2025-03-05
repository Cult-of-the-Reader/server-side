import { Router } from "express"
import dashboardController from "../controllers/dashboard.controller.js"
import { authMiddleware } from "../middlewares/auth.middleware.js"

const router = Router()

router.get("/profile", authMiddleware, dashboardController.getDashboard)
router.put("/profile", authMiddleware, dashboardController.personalInfo)

export default router