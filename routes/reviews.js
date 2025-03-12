import { Router } from "express"
import reviewController from "../controllers/review.controller.js"
import { authMiddleware } from "../middlewares/auth.middleware.js"

const router = Router()

/**
 * @swagger
 * /api/v2/reviews:
 *   post:
 *    summary: Create a new review for the book
 *    description: See the review/s by book id
 *    tags:
 *      - Reviews
 *    parameters:
 *      description: Some description...
 *    responses:
 *      200:
 *        description: List of reviews for a specific book
 *      401:
 *        description: Unauthorized
 *      500:
 *        description: Server error
 */
router.post("/reviews", authMiddleware, reviewController.createReview)

/**
 * @swagger
 * /api/v2/book/:bookId/reviews:
 *   get:
 *    summary: review/s by book id
 *    description: See the review/s by book id
 *    tags:
 *      - Reviews
 *    responses:
 *      200:
 *        description: List of reviews for a specific book
 *      500:
 *        description: Server error
 */
router.get("/book/:bookId/reviews", reviewController.getReviewsByBook)

export default router