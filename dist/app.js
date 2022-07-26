"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const books_1 = __importDefault(require("./routes/api/books"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const serverLogger_1 = __importDefault(require("./helpers/serverLogger/serverLogger"));
// import DB_HOST from './config';
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const formatsLogger = app.get('env') === 'development' ? 'dev' : "short";
app.use((0, morgan_1.default)(formatsLogger));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, serverLogger_1.default)(formatsLogger));
app.use('/api/books', books_1.default);
app.use((req, res, next) => {
    res.status(404).json({ message: 'Not Found' });
});
app.use((err, req, res, next) => {
    const { status = 500, message = 'Server Error' } = err;
    res.status(status).json({ message });
});
exports.default = app;
