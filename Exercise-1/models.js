const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }, // String is shorthand for {type: String}
    author: {
        type: String,
        required: true
    },
    year: {
        type: Number
    },
    available: {
        type: Boolean
    },
    genre: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;