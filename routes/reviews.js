import { Router } from "express"
import reviewController from "../controllers/review.controller.js"
import { authMiddleware } from "../middlewares/auth.middleware.js"

const router = Router()

router.post("/reviews", authMiddleware, reviewController.createReview)

router.get("/book/:bookId/reviews", reviewController.getReviewsByBook)

export default router