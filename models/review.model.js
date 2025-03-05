import mongoose from "mongoose"
import logger from "../config/logger.js"

const reviewSchema = new mongoose.Schema({
	bookId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	},
	userId: {
		type: String,
	},
	rating: {
		type: Number,
		required: true
	},
	comment: {
		type: String,
		required: true
	},
	isVisible: {
		type: Boolean,
		default: true
	},
}, { timestamps: true }
)

const Review = mongoose.model("Review", reviewSchema)

export default {
	createNewReview: async (bookId, userId, rating, comment) => {
		try {
			await Review.updateMany({ bookId, userId, isVisible: true }, { isVisible: false })

			const newReview = new Review({ bookId, userId, rating, comment, isVisible: true })
			await newReview.save()
			return newReview
		} catch (err) {
			logger.error("Error creating a new review:", err)
		}
	},
	getBookReviews: async (bookId) => {
		try {
			return await Review.find({ bookId, isVisible: true })
		} catch (err) {
			logger.error("Error getting reviews:", err)
		}
	}
}
