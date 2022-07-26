"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const bookAddJoiSchema = joi_1.default.object({
    title: joi_1.default.string().required(),
    author: joi_1.default.string().required(),
    favorite: joi_1.default.boolean(),
    genre: joi_1.default.string().required(),
    isbn: joi_1.default.string().required()
    // genre: Joi.string().allow("fantastic, love"),
    // isbn: Joi.string().pattern(/[0-9]{3}-[0-9]{1}-[0-9]{3}-[0-9]{5}-[0-9]{1}/),
});
const bookUpdateFavoriteSchema = joi_1.default.object({
    favorite: joi_1.default.boolean().required(),
});
const ExternalShema = {
    add: bookAddJoiSchema,
    patchFavorite: bookUpdateFavoriteSchema,
};
exports.default = ExternalShema;
