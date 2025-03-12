import { Router } from "express"
import bookController from "../controllers/book.controller.js"

const router = Router()

/**
 * @swagger
 * /api/v4/books:
 *  get:
 *   summary: Obtener todos los libros
 *   tags: [Libros]
 *   responses:
 *     200:
 *       description: Lista de libros
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Book'
 *     500:
 *       description: Error del servidor
 */
router.get("/books", bookController.getBooks)

/**
 * @swagger
 * /api/v4/book/{id}:
 *  get:
 *   summary: Obtener libro por ID
 *   tags: [Libros]
 *   parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *   responses:
 *     200:
 *       description: Detalles del libro
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     404:
 *       description: Libro no encontrado
 *     500:
 *       description: Error del servidor
 */
router.get("/book/:id", bookController.getBookById)

export default router