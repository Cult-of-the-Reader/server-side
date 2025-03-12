import modelReview from "../models/review.model.js"
import modelDashboard from "../models/dashboard.model.js"
import logger from "../config/logger.js"

export default {
	/**
		 * Creates a new review for a book.
		 * @param {Object} req - The HTTP request object.
		 * @param {Object} req.body - The request body.
		 * @param {string} req.body.bookId - ID of the book to review.
		 * @param {number} req.body.rating - Rating of the book (1-5).
		 * @param {string} req.body.comment - Review comment.
		 * @param {string} req.userId - User ID (added by authentication middleware).
		 * @param {Object} res - The HTTP response object.
		 * @returns {Object} JSON response with confirmation message and created review.
		 */
	createReview: async (req, res) => {
		try {
			const { bookId, rating, comment } = req.body
			const userId = req.userId

			if (!bookId || !rating || !comment) {
				return res.status(400).json({ error: "All fields are required" })
			}

			const userDashboard = await modelDashboard.getDashboard({ userId });
			if (!userDashboard) {
				return res.status(404).json({ error: "User not found" });
			}
			const username = userDashboard.user;

			const review = await modelReview.createNewReview(bookId, userId, username, rating, comment)

			res.status(201).json({ message: "Review created successfully", review })
		} catch (err) {
			logger.error("Error creating review:", err)
			res.status(500).json({ error: "Something went wrong" })
		}
	},

	/**
		 * Gets all reviews for a book.
		 * @param {Object} req - The HTTP request object.
		 * @param {Object} req.params - The route parameters.
		 * @param {string} req.params.bookId - ID of the book.
		 * @param {Object} res - The HTTP response object.
		 * @returns {Object} JSON response with the list of reviews or error message.
		 */
	getReviewsByBook: async (req, res) => {
		try {
			const { bookId } = req.params

			const reviews = await modelReview.getBookReviews(bookId)
			res.status(200).json(reviews)
		} catch (err) {
			logger.error("Error fetching reviews:", err)
			res.status(500).json({ error: "Something went wrong" })
		}
	}
}