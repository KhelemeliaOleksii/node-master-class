import {
    Request,
    Response,
    NextFunction
} from "express"
import BookModel from "../../models/books";
import { createError } from "../../helpers";

const getById = async (req: Request, res: Response) => {
    const { bookId } = req.params;
    // const result = await Book.findOne({ _id: bookId });
    const result = await BookModel.inner.findById(bookId);
    if (!result) {
        throw createError(404);
    }
    res.json(result)
}

export default getById;