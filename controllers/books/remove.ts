import { createError } from "../../helpers";
import { Request, Response, NextFunction } from 'express';
import BookModel from "../../models/books";

const remove = async (req: Request, res: Response) => {
    const { bookId } = req.params;
    const result = await BookModel.inner.findByIdAndRemove(bookId);
    if (!result) {
        throw createError(404);
    }
    res.json(result);
}

export default remove;