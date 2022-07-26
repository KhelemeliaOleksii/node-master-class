"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
const books_1 = __importDefault(require("../../models/books"));
const getAll = async (req, res) => {
    // const result = await Book.find();
    // const result = await Book.find({ title: "Four narrow" });
    // const result = await Book.find({}, "-createdAt");
    const result = await books_1.default.inner.find({}, "title author");
    if (!result) {
        throw (0, helpers_1.createError)(404);
    }
    res.status(200).json(result);
};
exports.default = getAll;
