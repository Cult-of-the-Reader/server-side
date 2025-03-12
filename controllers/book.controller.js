import modelBook from "../models/book.model.js"
import logger from "../config/logger.js"

export default {
	/**
     * Gets all available books.
     * @param {Object} req - The HTTP request object.
     * @param {Object} res - The HTTP response object.
     * @returns {Object} JSON response with the list of books or error message.
     */
	getBooks: async (req, res) => {
		try {
			const books = await modelBook.getBooks()

			res.status(200).json(books)
		} catch (err) {

			logger.error('Error getting books:', err)
			res.status(500).json({ error: 'Something went wrong' })
		}
	},

	/**
     * Gets a specific book by its ID.
     * @param {Object} req - The HTTP request object.
     * @param {Object} req.params - The route parameters.
     * @param {string} req.params.id - ID of the book to find.
     * @param {Object} res - The HTTP response object.
     * @returns {Object} JSON response with the found book or error message.
     */
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