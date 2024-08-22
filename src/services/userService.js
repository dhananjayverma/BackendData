class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }

    async createUser(data) {
        return this.userModel.create(data);
    }

    async getUsers() {
        return this.userModel.find();
    }

    async getUserById(id) {
        return this.userModel.findById(id).populate('borrowedBooks');
    }

    async updateUser(id, data) {
        return this.userModel.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteUser(id) {
        return this.userModel.findByIdAndDelete(id);
    }
}

module.exports = UserService;
