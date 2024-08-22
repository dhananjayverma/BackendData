const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true },
    available: { type: Boolean, default: true },
    borrowedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    dueDate: Date,
});

module.exports = mongoose.model('Book', bookSchema);







// const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema({
//     title: { 
//         type: String, 
//         required: true, 
//         trim: true // Remove leading and trailing whitespace
//     },
//     author: { 
//         type: mongoose.Schema.Types.ObjectId, 
//         ref: 'Author', 
//         required: true 
//     },
//     available: { 
//         type: Boolean, 
//         default: true 
//     },
//     borrowedBy: { 
//         type: mongoose.Schema.Types.ObjectId, 
//         ref: 'User' 
//     },
//     dueDate: { 
//         type: Date,
//         validate: {
//             validator: function(value) {
//                 // Validate that dueDate is either null or in the future
//                 return !this.borrowedBy || (value && value > Date.now());
//             },
//             message: 'Due date must be in the future if the book is borrowed.'
//         }
//     }
// });

// // Add indexes to improve query performance
// bookSchema.index({ author: 1 });
// bookSchema.index({ borrowedBy: 1 });

// const Book = mongoose.model('Book', bookSchema);

// module.exports = Book;

