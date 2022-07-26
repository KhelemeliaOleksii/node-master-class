"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const books_1 = __importDefault(require("../../../controllers/books"));
const helpers_1 = require("../../../helpers");
const router = (0, express_1.Router)();
router.get('/', (0, helpers_1.ctrlTryCatchWrapper)(books_1.default.getAll));
router.post('/', (0, helpers_1.ctrlTryCatchWrapper)(books_1.default.add));
router.get('/:bookId', (0, helpers_1.ctrlTryCatchWrapper)(books_1.default.getById));
router.put("/:bookId", (0, helpers_1.ctrlTryCatchWrapper)(books_1.default.put));
router.delete('/:bookId', (0, helpers_1.ctrlTryCatchWrapper)(books_1.default.remove));
router.patch('/:bookId/favorite', (0, helpers_1.ctrlTryCatchWrapper)(books_1.default.patch));
exports.default = router;
