import { Router } from "express"

import authController from "../controllers/auth.controller.js"

const router = Router()

/**
 * @swagger
 * /api/v4/register:
 *  post:
 *   summary: Registrar nuevo usuario
 *   tags: [Autenticación]
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/User'
 *   responses:
 *     201:
 *       description: Usuario registrado
 *     409:
 *       description: Conflicto (email/usuario existente)
 *     500:
 *       description: Error del servidor
 */
router.post("/register", authController.register)

/**
 * @swagger
 * /api/v4/login:
 *  post:
 *   summary: Iniciar sesión
 *   tags: [Autenticación]
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             email: { type: string }
 *             pwd: { type: string }
 *   responses:
 *     200:
 *       description: Login exitoso
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token: { type: string }
 *     401:
 *       description: Credenciales inválidas
 *     404:
 *       description: Usuario no encontrado
 *     500:
 *       description: Error del servidor
 */
router.post("/login", authController.login)

export default router