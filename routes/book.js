import { Router } from "express"
import bookController from "../controllers/book.controller.js"

const router = Router()

/**
 * @swagger
 * /api/v2/books:
 *  get:
 *   summary: Get books from MongoDB
 *   tags:
 *     - Books
 *   responses:
 *     200:
 *      description: list of books
 */
router.get("/books", bookController.getBooks)

router.get("/book/:id", bookController.getBookById)

export default router