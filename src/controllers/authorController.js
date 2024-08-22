class AuthorController {
    constructor(authorService) {
        this.authorService = authorService;
    }

    async createAuthor(req, res) {
        const author = await this.authorService.createAuthor(req.body);
        res.status(201).json(author);
    }

    async getAuthors(req, res) {
        const authors = await this.authorService.getAuthors();
        res.status(200).json(authors);
    }

    async getAuthorById(req, res) {
        const author = await this.authorService.getAuthorById(req.params.id);
        res.status(200).json(author);
    }

    async updateAuthor(req, res) {
        const author = await this.authorService.updateAuthor(req.params.id, req.body);
        res.status(200).json(author);
    }

    async deleteAuthor(req, res) {
        await this.authorService.deleteAuthor(req.params.id);
        res.status(204).send();
    }
}

module.exports = AuthorController;
