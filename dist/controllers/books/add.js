"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
const books_1 = __importDefault(require("../../models/books"));
const add = async ({ body }, res) => {
    const { error } = books_1.default.outer.add.validate(body);
    if (error) {
        console.log(error);
        throw (0, helpers_1.createError)(400, error.message);
    }
    const result = await books_1.default.inner.create(body);
    res.status(201).json(result);
};
exports.default = add;
