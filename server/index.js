const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/bookstore', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Book = mongoose.model('Book', {
  title: String,
  author: String,
  year: Number,
  imageLink: String,
  country: String,
  language: String,
  date: String,
  page: Number,
});

app.get('/api/books', async (req, res) => {
    try {
      const books = await Book.find();
      res.send(books);
    } catch (error) {
      res.status(500).send(error);
    }
  });

app.post('/api/books', async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).send(book);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.put('/api/books/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!book) {
      return res.status(404).send();
    }
    res.send(book);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
