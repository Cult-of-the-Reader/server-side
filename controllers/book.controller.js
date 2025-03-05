import modelBook from "../models/book.model.js"
import logger from "../config/logger.js"

export default {
	getBooks: async (req, res) => {
		try {
			const books = await modelBook.getBooks()

			res.status(200).json(books)
		} catch (err) {

			logger.error('Error getting books:', err)
			res.status(500).json({ error: 'Something went wrong' })
		}
	},
	getBookById: async (req, res) => {
		try {
			const { id } = req.params
			const book = await modelBook.getIdBook(id)

			if (!book) {
				return res.status(404).json({ error: "Book not found" })
			}

			res.status(200).json(book)
		} catch (err) {
			logger.error('Error getting a book:', err)
			res.status(500).json({ error: 'Something went wrong' })
		}
	}
}