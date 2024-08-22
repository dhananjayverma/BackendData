class BookService {
    constructor(bookModel, userModel) {
        this.bookModel = bookModel;
        this.userModel = userModel;
    }

    async createBook(data) {
        return this.bookModel.create(data);
    }

    async getBooks() {
        return this.bookModel.find().populate('author');
    }

    async getBookById(id) {
        return this.bookModel.findById(id).populate('author');
    }

    async updateBook(id, data) {
        return this.bookModel.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteBook(id) {
        return this.bookModel.findByIdAndDelete(id);
    }

    async borrowBook(userId, bookId) {
        const book = await this.bookModel.findById(bookId);
        if (!book.available) throw new Error('Book not available');

        const user = await this.userModel.findById(userId);
        if (user.borrowedBooks.length >= 3) throw new Error('Max borrow limit reached');

        book.available = false;
        book.borrowedBy = userId;
        book.dueDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 1 week
        await book.save();

        user.borrowedBooks.push(bookId);
        await user.save();

        return book;
    }

    async returnBook(userId, bookId) {
        const book = await this.bookModel.findById(bookId);
        if (book.borrowedBy.toString() !== userId) throw new Error('Book not borrowed by user');

        book.available = true;
        book.borrowedBy = null;
        book.dueDate = null;
        await book.save();

        const user = await this.userModel.findById(userId);
        user.borrowedBooks.pull(bookId);
        await user.save();

        return book;
    }
}

module.exports = BookService;
