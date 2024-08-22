const express = require('express');
const router = express.Router();

module.exports = (di) => {
    const userController = di.get('userController');

    router.post('/', userController.createUser.bind(userController));
    router.get('/', userController.getUsers.bind(userController));
    router.get('/:id', userController.getUserById.bind(userController));
    router.put('/:id', userController.updateUser.bind(userController));
    router.delete('/:id', userController.deleteUser.bind(userController));

    return router;
};
