import { Router } from "express"
import dashboardController from "../controllers/dashboard.controller.js"
import { authMiddleware } from "../middlewares/auth.middleware.js"

const router = Router()


/**
 * @swagger
 * /api/v4/profile:
 *  get:
 *   summary: Obtener perfil de usuario
 *   description: Devuelve la información del perfil del usuario autenticado.
 *   tags: [Perfil]
 *   security:
 *     - jwtAuth: []
 *   responses:
 *     200:
 *       description: Datos del perfil
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Profile'
 *     401:
 *       description: No autorizado
 *     500:
 *       description: Error del servidor
 */
router.get("/profile", authMiddleware, dashboardController.getDashboard)

/**
 * @swagger
 * /api/v4/profile:
 *  put:
 *   summary: Actualizar perfil de usuario
 *   description: Permite al usuario actualizar su información personal.
 *   tags: [Perfil]
 *   security:
 *     - jwtAuth: []
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/Profile'
 *   responses:
 *     200:
 *       description: Perfil actualizado correctamente
 *     401:
 *       description: No autorizado
 *     500:
 *       description: Error del servidor
 */
router.put("/profile", authMiddleware, dashboardController.personalInfo)

export default router