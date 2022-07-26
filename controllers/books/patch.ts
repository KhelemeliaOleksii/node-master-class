import Book from "../../models/books/booksModel";
import { createError } from "../../helpers";
import { Request, Response, NextFunction } from 'express';
import BookModel from "../../models/books";

const patch = async (req: Request, res: Response) => {
    const { error } = BookModel.outer.patchFavorite.validate(req.body);
    if (error) {
        throw createError(400);
    }
    const { bookId } = req.params;
    const result = await BookModel.inner.findByIdAndUpdate(bookId, req.body, { new: true });
    // const result = await Book.updateOne()

    if (!result) {
        throw createError(404);
    }
    res.json(result)
}

export default patch;