class BookController {
    constructor(bookService, auditLogService) {
        this.bookService = bookService;
        this.auditLogService = auditLogService;
    }

    async createBook(req, res) {
        const book = await this.bookService.createBook(req.body);
        res.status(201).json(book);
    }

    async getBooks(req, res) {
        const books = await this.bookService.getBooks();
        res.status(200).json(books);
    }

    async getBookById(req, res) {
        const book = await this.bookService.getBookById(req.params.id);
        res.status(200).json(book);
    }

    async updateBook(req, res) {
        const book = await this.bookService.updateBook(req.params.id, req.body);
        res.status(200).json(book);
    }

    async deleteBook(req, res) {
        await this.bookService.deleteBook(req.params.id);
        res.status(204).send();
    }

    async borrowBook(req, res) {
        const { userId, bookId } = req.body;
        const book = await this.bookService.borrowBook(userId, bookId);
        await this.auditLogService.createLog({
            action: 'BORROW',
            user: userId,
            book: bookId
        });
        res.status(200).json(book);
    }

    async returnBook(req, res) {
        const { userId, bookId } = req.body;
        const book = await this.bookService.returnBook(userId, bookId);
        await this.auditLogService.createLog({
            action: 'RETURN',
            user: userId,
            book: bookId
        });
        res.status(200).json(book);
    }
}

module.exports = BookController;
