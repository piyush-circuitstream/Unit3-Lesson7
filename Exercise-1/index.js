// getting-started.js
const mongoose = require('mongoose');
const Book = require('./models');
const express = require('express');
const PORT = 3000;

const app = express();

app.use(express.json());

//Fetching data from mongoDB
app.get('/books', async (req, res) => {
    let books = await Book.find();
    res.json(books);
});

//Writing data to mongoDB
app.put('/books', async (req, res) => {
    try {
        const { title, author, year, available, genre } = req.body;

        const newBook = new Book({
            title,
            author,
            year,
            available,
            genre
        });

        await newBook.save();
        res.status(201).json({ message: "Book created successfully!" });
    } catch (error) {
        res.status(400).json({ message: "Error on creating book! Please try again." });
    }

});

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(data => console.log("My database is connected."))
    .catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`My server is listening to the ${PORT}`);
});