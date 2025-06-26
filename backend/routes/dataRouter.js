import express from "express";
import { bookData } from "../data.js";
const bookRouter = express.Router();

bookRouter.get("/book", (req, res) => {
  res.json(bookData);
});

// bookRouter.get("/book/:id", (req, res) => {
//   const bookId = parseInt(req.params.id);
//   const books = bookData.find((book) => book.id === bookId);
//   if (!books) {
//     res.status(404).json({ message: "book not found" });
//   }
//   res.json(books);
// });

export { bookRouter };
