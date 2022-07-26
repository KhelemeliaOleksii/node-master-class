"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const books_1 = __importDefault(require("../../models/books"));
const helpers_1 = require("../../helpers");
const getById = async (req, res) => {
    const { bookId } = req.params;
    // const result = await Book.findOne({ _id: bookId });
    const result = await books_1.default.inner.findById(bookId);
    if (!result) {
        throw (0, helpers_1.createError)(404);
    }
    res.json(result);
};
exports.default = getById;
