const express = require('express');
const router = express.Router();

module.exports = (di) => {
    const authorController = di.get('authorController');

    router.post('/', authorController.createAuthor.bind(authorController));
    router.get('/', authorController.getAuthors.bind(authorController));
    router.get('/:id', authorController.getAuthorById.bind(authorController));
    router.put('/:id', authorController.updateAuthor.bind(authorController));
    router.delete('/:id', authorController.deleteAuthor.bind(authorController));

    return router;
};
