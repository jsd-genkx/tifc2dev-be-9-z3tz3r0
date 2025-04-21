const express = require("express");
const bookRoute = express.Router();
const books = require("../../data/books");

// Filter books by genre (optional)
bookRoute.get("/books", (req, res, next) => {
  setTimeout(() => {
    const { genre } = req.query;
    // TODO: ADD CODE HERE ⬇️ to Filter books by genre.
    if (!genre) {
      res.json(books);
      return;
    }
    const filteredBooks = books.filter((book) => book.genre.includes(genre));
    if (filteredBooks.length === 0) {
      const error = new Error(`No books with ${genre} found`);
      error.status = 404;
      next(error);
    } else {
      res.json(filteredBooks);
    }
    //TODO: ADD CODE HERE ⬇️
  }, 1000); // Simulate a 1-second delay
});

// GET specific book by ID with async/await
bookRoute.get("/books/:id", async (req, res, next) => {
  const book = await new Promise((resolve, reject) => {
    setTimeout(() => {
      const foundBook = books.find(
        (book) => book.id === parseInt(req.params.id, 10)
      );
      if (foundBook) {
        resolve(foundBook);
      } else {
        //TODO: ADD CODE to reject the promise
        reject(new Error(`Book with ID ${req.params.id} not found`));
      }
    }, 1000); // Simulate a 1-second delay
  });
  //TODO: ADD CODE HERE ⬇️
  try {
    res.json(book);
  } catch (error) {
    next(error);
  }
});

// create new Book

bookRoute.post("/books", (req, res, next) => {
  const newBook = req.body;
  if (!newBook || !newBook.title || !newBook.author || !newBook.genre) {
    const error = new Error("Missing title, author, genre");
    error.status = 404;
    next(error);
  }
  newBook.id = books.length + 1;
  books.push(newBook);
  res.status(201).json(newBook);
});

//TODO: ADD CODE HERE ⬇️
module.exports = bookRoute;
