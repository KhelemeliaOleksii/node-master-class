"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
    genre: {
        type: String,
        enum: ["Fantastic", "Love"],
        required: true,
    },
    isbn: {
        type: String,
        match: /[0-9]{3}-[0-9]{1}-[0-9]{3}-[0-9]{5}-[0-9]{1}/,
        required: true,
        unique: true
    },
}, {
    versionKey: false,
    timestamps: true
});
const Book = (0, mongoose_1.model)("book", bookSchema);
exports.default = Book;
