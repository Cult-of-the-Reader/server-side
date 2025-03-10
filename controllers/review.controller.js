import modelReview from "../models/review.model.js"
import modelDashboard from "../models/dashboard.model.js"
import logger from "../config/logger.js"

export default {
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