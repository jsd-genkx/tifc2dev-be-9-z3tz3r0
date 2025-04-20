const express = require("express");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Simulated data for API
const books = [
  { id: 1, title: "1984", author: "George Orwell", genre: "Dystopian" },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
  },
];

// Filter books by genre (optional)
app.get("/books", (req, res, next) => {
  setTimeout(() => {
    const { genre } = req.query;
    //TODO: ADD CODE HERE ⬇️ to Filter books by genre.
    const filteredBooks = books.filter((book) => book.genre.includes(genre));
    //TODO: ADD CODE HERE ⬇️
  }, 1000); // Simulate a 1-second delay
});

// GET specific book by ID with async/await
app.get("/books/:id", async (req, res, next) => {
  const book = await new Promise((resolve, reject) => {
    setTimeout(() => {
      const foundBook = books.find((b) => b.id === parseInt(req.params.id, 10));
      if (foundBook) {
        resolve(foundBook);
      } else {
        //TODO: ADD CODE to reject the promise
      }
    }, 1000); // Simulate a 1-second delay
  });
  //TODO: ADD CODE HERE ⬇️
});

//TODO: ADD CODE HERE ⬇️

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
