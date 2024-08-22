const express = require('express');
const dependencyInjector = require('./utils/dependencyInjector');
const authorRoutes = require('./routes/authorRoutes');
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');
const auditLogRoutes = require('./routes/auditLogRoutes');

dependencyInjector.init();

const app = express();
app.use(express.json());

app.use('/authors', authorRoutes(dependencyInjector));
app.use('/books', bookRoutes(dependencyInjector));
app.use('/users', userRoutes(dependencyInjector));
app.use('/logs', auditLogRoutes(dependencyInjector));

module.exports = app;
