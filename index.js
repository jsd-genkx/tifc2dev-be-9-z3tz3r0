const express = require("express");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

const bookv1Routes = require("./api/v1/booksRoute");

app.use("/api/v1", bookv1Routes);

// Global Error handling (Middleware)
app.use((err, req, res, next) => {
  const status = err.status;
  const errorMessage = {
    message: err.message,
    status: err.status,
  };

  if (process.env.NODE_ENV === "development") {
    errorMessage.stack = err.stack;
  }

  console.error(err.stack);
  res.status(status).json(errorMessage);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
