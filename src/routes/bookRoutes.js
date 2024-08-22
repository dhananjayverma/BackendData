const express = require('express');
const router = express.Router();

module.exports = (di) => {
    const bookController = di.get('bookController');

    router.post('/', bookController.createBook.bind(bookController));
    router.get('/', bookController.getBooks.bind(bookController));
    router.get('/:id', bookController.getBookById.bind(bookController));
    router.put('/:id', bookController.updateBook.bind(bookController));
    router.delete('/:id', bookController.deleteBook.bind(bookController));
    router.post('/borrow', bookController.borrowBook.bind(bookController));
    router.post('/return', bookController.returnBook.bind(bookController));

    return router;
};
