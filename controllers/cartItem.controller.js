import modelCart from "../models/cartItem.model.js"
import modelBook from "../models/book.model.js"
import modelUser from "../models/user.model.js"
import logger from "../config/logger.js"

export default {
	getCart: async (req, res) => {
		try {
			const userId = req.userId
			const cartItems = await modelCart.getCart(userId)

			const user = await modelUser.findById(userId)

			res.status(200).json({ user, cartItems })
		} catch (err) {
			logger.error(err);
			res.status(500).json({ error: 'Something went wrong' })
		}
	},
	addCart: async (req, res) => {
		try {
			const { bookId } = req.body
			const userId = req.userId

			const book = await modelBook.buyBook(bookId)

			if (!book) return res.status(400).json({ error: "Out of stock " })

			const cartItem = await modelCart.findUpdate(bookId, userId)

			res.status(200).json(cartItem)
		} catch (err) {
			logger.error(err);
			res.status(500).json({ error: 'Something went wrong' })
		}
	},
	deleteCart: async (req, res) => {
		try {
			const cartItem = await modelCart.softDelete(bookId, userId)

			if (cartItem) {
				await modelBook.restoreBook(cartItem.book)
			}

			res.status(200).json({ message: "Stock restored" })
		} catch(err) {
			logger.error(err);
			res.status(500).json({ error: 'Something went wrong' })
		}
	}
}