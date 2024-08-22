const AuthorService = require('../services/authorService');
const BookService = require('../services/bookService');
const UserService = require('../services/userService');
const AuditLogService = require('../services/auditLogService');
const AuthorController = require('../controllers/authorController');
const BookController = require('../controllers/bookController');
const UserController = require('../controllers/userController');
const AuditLogController = require('../controllers/auditLogController');
const Author = require('../models/authorModel');
const Book = require('../models/bookModel');
const User = require('../models/userModel');
const AuditLog = require('../models/auditLogModel');

class DependencyInjector {
    constructor() {
        this.services = {};
        this.controllers = {};
    }

    init() {
        this.services.authorService = new AuthorService(Author);
        this.services.bookService = new BookService(Book, User);
        this.services.userService = new UserService(User);
        this.services.auditLogService = new AuditLogService(AuditLog);

        this.controllers.authorController = new AuthorController(this.services.authorService);
        this.controllers.bookController = new BookController(this.services.bookService, this.services.auditLogService);
        this.controllers.userController = new UserController(this.services.userService);
        this.controllers.auditLogController = new AuditLogController(this.services.auditLogService);
    }

    get(serviceOrController) {
        return this.controllers[serviceOrController] || this.services[serviceOrController];
    }
}

module.exports = new DependencyInjector();
