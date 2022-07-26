"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
const books_1 = __importDefault(require("../../models/books"));
const patch = async (req, res) => {
    const { error } = books_1.default.outer.patchFavorite.validate(req.body);
    if (error) {
        throw (0, helpers_1.createError)(400);
    }
    const { bookId } = req.params;
    const result = await books_1.default.inner.findByIdAndUpdate(bookId, req.body, { new: true });
    // const result = await Book.updateOne()
    if (!result) {
        throw (0, helpers_1.createError)(404);
    }
    res.json(result);
};
exports.default = patch;
