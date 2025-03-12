import { Router } from "express"
import reviewController from "../controllers/review.controller.js"
import { authMiddleware } from "../middlewares/auth.middleware.js"

const router = Router()

/**
 * @swagger
 * /api/v4/reviews:
 *  post:
 *   summary: Crear reseña
 *   tags: [Reseñas]
 *   security:
 *     - jwtAuth: []
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/Review'
 *   responses:
 *     201:
 *       description: Reseña creada
 *     400:
 *       description: Campos faltantes
 *     401:
 *       description: No autorizado
 *     500:
 *       description: Error del servidor
 */
router.post("/reviews", authMiddleware, reviewController.createReview)

/**
 * @swagger
 * /api/v4/book/{bookId}/reviews:
 *  get:
 *   summary: Obtener reseñas de un libro
 *   tags: [Reseñas]
 *   parameters:
 *     - in: path
 *       name: bookId
 *       required: true
 *       schema:
 *         type: string
 *   responses:
 *     200:
 *       description: Lista de reseñas
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Review'
 *     500:
 *       description: Error del servidor
 */
router.get("/book/:bookId/reviews", reviewController.getReviewsByBook)

export default router