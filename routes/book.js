import { Router } from "express"
import bookController from "../controllers/book.controller.js"

const router = Router()

router.get("/books", bookController.getBooks)
router.get("/book/:id", bookController.getBookById)

export default router