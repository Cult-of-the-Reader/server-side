import { Router } from "express"

import authController from "../controllers/auth.controller.js"

const router = Router()

/**
 * @swagger
 * /api/v2/register:
 *   post:
 *    summary: Auth register user
 *    description: Do a register user with email and password
 *    tags:
 *      - Auth
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - email
 *              - pwd
 *            properties:
 *              username:
 *                type: string
 *                description: user name / nick name
 *                example: mario
 *              email:
 *                type: string
 *                description: user email
 *                format: email
 *                example: mario@email.com
 *              pwd:
 *                type: string
 *                description: user password
 *                format: password
 *                example: test1234
 *    responses:
 *      201:
 *        description: User registered successfully
 *      409:
 *         description: Username is taken or email is alredy registered
 *      500:
 *        description: Server Error
 */
router.post("/register", authController.register)

/**
 * @swagger
 * /api/v2/login:
 *   post:
 *    summary: Auth login user
 *    description: Do a auth user with email and password
 *    tags:
 *      - Auth
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - username: mario
 *              - email
 *              - pwd
 *            properties:
 *              email:
 *                type: string
 *                description: user email
 *                format: email
 *                example: mario@email.com
 *              pwd:
 *                type: string
 *                description: user password
 *                format: password
 *                example: test1234
 *    responses:
 *      200:
 *        description: Login successful
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: Login successful
 *                token:
 *                  type: string
 *                  description: Auth token (without bearer)
 *      401:
 *         description: Wrong password
 *      404:
 *        description: User not registered
 *      500:
 *        description: Server Error
 */
router.post("/login", authController.login)

export default router