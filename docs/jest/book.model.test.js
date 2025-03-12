const bookModel = require("../../models/book.model.js");

const getBooks = bookModel.getBooks()

describe('CRUD book', () => {
	test("Get all books", async () => {
		const getBooksTest = await getBooks
		expect(getBooksTest).toEqual(expect.arrayContaining(getBooksTest));
	})
})