import mongoose from "mongoose"
import logger from "../config/logger.js"

const bookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true
	},
	author: {
		type: String,
		required: true,
		trim: true
	},
	year: {
		type: Number,
		min: -3000
	},
	description: {
		type: String,
		required: true,
		minlength: 50
	},
	cover: {
		type: String,
		required: true,
		validate: {
			validator: (url) => url.startsWith('http'),
			message: 'La portada debe ser una URL válida'
		}
	},
	category: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
		min: 0
	},
	stock: {
		type: Number,
		default: 0,
		min: 0
	},
	reservedStock: {
		type: Number,
		default: 0,
		min: 0
	},
	isbn: {
		type: String,
		required: true,
		unique: true,
		match: /^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$/
	},
	publisher: String,
	pageCount: {
		type: Number,
		min: 1
	},
	language: {
		type: String,
	},
	format: {
		type: String,
	},
	edition: String,
	isBestseller: {
		type: Boolean,
		default: false
	},
	rating: {
		type: Number,
		min: 1,
		max: 5,
		default: 4.0
	},
	discount: {
		type: Number,
		default: 0,
		min: 0,
		max: 0.99
	},
	signedCopy: {
		type: Boolean,
		default: false
	},
	tags: [String]
}, {
	timestamps: true
});

const Book = mongoose.model("Book", bookSchema)

export default {
	getBooks: () => {
		try {
			return Book.find()
		} catch (err) {
			logger.error(err)
		}
	},
	getIdBook: async (idBook) => {
		try {
			return await Book.findById(idBook)
		} catch (err) {
			logger.error(err)
		}
	},
	buyBook: async (idBook) => {
		try {
			const lessStock = await Book.findByIdAndUpdate(
				{ _id: idBook, stock: { $gt: 0 } },
				{ $inc: { stock: -1, reservedStock: 1 } },
				{ new: true }
			)
			console.log(lessStock)

			return lessStock
		} catch (err) {
			logger.error(err)
		}
	},
	restoreBook: async (idBook) => {
		try {
			const restoreStock = await Book.findByIdAndUpdate(idBook, {
				$inc: { stock: 1, reservedStock: -1 }
			})

			return restoreStock
		} catch (err) {
			logger.error(err)
		}
	}

}
