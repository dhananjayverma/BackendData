# Library Management System

## Overview

The Library Management System is a backend API developed using Node.js and MongoDB. This project provides a robust solution for managing library operations including handling books, authors, and users. It features functionalities for book borrowing, returning books, and audit logging to monitor user activities.

## Features
##### CRUD Operations: Perform Create, Read, Update, and Delete operations for books, authors, and users.
##### Borrowing and Returning Books: Manage book borrowing and returning with constraints such as maximum borrow limits and due dates.
##### Audit Logging: Track user actions (e.g., borrowing and returning books) with timestamped records and filtering capabilities.
#### MongoDB Integration: Use MongoDB for data management and querying.

## API Endpoints
## Authors
Create Author: POST /authors
Get All Authors: GET /authors
Get Author by ID: GET /authors/:id
Update Author: PUT /authors/:id
Delete Author: DELETE /authors/:id
## Books
Create Book: POST /books
Get All Books: GET /books
Get Book by ID: GET /books/:id
Update Book: PUT /books/:id
Delete Book: DELETE /books/:id
Borrow Book: POST /books/borrow
Return Book: POST /books/return
## Users
Create User: POST /users
Get All Users: GET /users
Get User by ID: GET /users/:id
Update User: PUT /users/:id
Delete User: DELETE /users/:id
## Audit Logs
Get Logs: GET /logs

Use query parameters to filter logs by criteria such as action type, user, or timestamp.

Testing
Use tools like Postman or Insomnia to test API endpoints. Ensure all CRUD operations, borrowing/returning functionality, and audit logging features work as expected.

Contributing
We welcome contributions! To contribute:

Fork the Repository
Create a New Branch: git checkout -b feature/your-feature
Make Your Changes
Commit Your Changes: git commit -am 'Add new feature'
Push to the Branch: git push origin feature/your-feature
Create a Pull Request
License
This project is licensed under the MIT License - see the LICENSE file for details.

