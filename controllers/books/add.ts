import { TBookAdd } from "../../models/books/booksTSTypes";
import { createError } from "../../helpers";
import { Response, NextFunction } from 'express';
import BookModel from "../../models/books";

const add = async ({ body }: { body: TBookAdd }, res: Response) => {
    const { error } = BookModel.outer.add.validate(body);
    if (error) {
        console.log(error);

        throw createError(400, error.message);
    }
    const result = await BookModel.inner.create(body);
    res.status(201).json(result);
}

export default add;