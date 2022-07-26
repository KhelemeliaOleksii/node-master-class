"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const promises_1 = require("fs/promises");
const serverLogger = (formats) => async (req, res, next) => {
    if (formats === 'dev') {
        const { method, url } = req;
        const currentDate = (0, moment_1.default)().format('YYYY-MM-DD_hh:mm:ss');
        await (0, promises_1.appendFile)('server.log', `${method} ${url} ${currentDate}`);
    }
    next();
};
exports.default = serverLogger;
