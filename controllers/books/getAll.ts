import { createError } from "../../helpers";
import {
    Request,
    Response,
    NextFunction
} from "express"
import BookModel from "../../models/books";

const getAll = async (req: Request, res: Response) => {
    // const result = await Book.find();
    // const result = await Book.find({ title: "Four narrow" });
    // const result = await Book.find({}, "-createdAt");
    const result = await BookModel.inner.find({}, "title author");

    if (!result) {
        throw createError(404);
    }
    res.status(200).json(result);
}



export default getAll;

