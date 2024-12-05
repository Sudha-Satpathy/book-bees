// functions are defined here...
import book from "../model/book_model.js";

export const getBook = async (req, res) => {
  try {
    const bookData = await book.find()
    res.status(200).json(bookData)
  } catch (error) {
    console.log(error)
  }
};
