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

			const cartItem = await modelCart.findIncrement(bookId, userId)

			res.status(200).json(cartItem)
		} catch (err) {
			logger.error(err);
			res.status(500).json({ error: 'Something went wrong' })
		}
	},

	decrementCart: async (req, res) => {
		try {
			const result = await modelCart.findDecrement(req.params.id, req.userId);
			if (!result) return res.status(404).json({ error: "Item no encontrado" });

			if (result) {
				await modelBook.restoreBook(result.book);
			}

			res.status(200).json(result)
		} catch (error) {
			res.status(500).json({ error: "Error al decrementar" });
		}
	},

	deleteCart: async (req, res) => {
		try {
			const { id } = req.params;
			const userId = req.userId;

			const cartItem = await modelCart.findById(id, userId);

			if (cartItem) {
				for (let i = 0; i < cartItem.quantity; i++) {
					await modelBook.restoreBook(cartItem.book);
				}

				await modelCart.softDelete(id, userId);
			}

			res.status(200).json({ message: "Item removed from cart" });
		} catch (err) {
			logger.error(err);
			res.status(500).json({ error: 'Something went wrong' });
		}
	}
}