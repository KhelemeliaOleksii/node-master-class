"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const booksModel_1 = __importDefault(require("./booksModel"));
const booksCustomSchema_1 = __importDefault(require("./booksCustomSchema"));
const BookModel = {
    inner: booksModel_1.default,
    outer: booksCustomSchema_1.default
};
exports.default = BookModel;
