"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
const books_1 = __importDefault(require("../../models/books"));
const remove = async (req, res) => {
    const { bookId } = req.params;
    const result = await books_1.default.inner.findByIdAndRemove(bookId);
    if (!result) {
        throw (0, helpers_1.createError)(404);
    }
    res.json(result);
};
exports.default = remove;
