# Library API

## Description
This is a simple RESTful API for managing a library of books. It includes endpoints to retrieve all books, filter books by genre, retrieve a specific book by ID, and robust error handling mechanisms.

## Getting Started

### Prerequisites
- Node.js (https://nodejs.org/)
- npm (Node Package Manager, comes with Node.js)

### Installation
1. Clone the repository or download the code.
2. Navigate to the project directory.
3. Install the dependencies by running:
   ```bash
   npm install
   ```

### Running the Application
1. Start the server by running:
   ```bash
   npm start
   ```
2. The server will start on `http://localhost:3000`.

### API Endpoints

#### Get All Books
- **URL:** `/books`
- **Method:** GET
- **Query Parameters:**
  - `genre` (optional): Filter books by genre.
- **Success Response:**
  - **Code:** 200
  - **Content:** List of books
- **Example Request:**
  ```bash
  curl -X GET "http://localhost:3000/books"
  ```

#### Get Book by ID
- **URL:** `/books/:id`
- **Method:** GET
- **URL Params:**
  - `id`: The ID of the book
- **Success Response:**
  - **Code:** 200
  - **Content:** Book object
- **Error Response:**
  - **Code:** 404
  - **Content:** { error: "Book not found" }
- **Example Request:**
  ```bash
  curl -X GET "http://localhost:3000/books/1"
  ```

### Error Handling
- Middleware to handle 404 errors
- General error handling middleware to capture all other errors