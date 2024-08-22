class AuthorService {
    constructor(authorModel) {
        this.authorModel = authorModel;
    }

    async createAuthor(data) {
        return this.authorModel.create(data);
    }

    async getAuthors() {
        return this.authorModel.find();
    }

    async getAuthorById(id) {
        return this.authorModel.findById(id);
    }

    async updateAuthor(id, data) {
        return this.authorModel.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteAuthor(id) {
        return this.authorModel.findByIdAndDelete(id);
    }
}

module.exports = AuthorService;
