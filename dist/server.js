"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const mongoose_1 = __importDefault(require("mongoose"));
const { DB_HOST, PORT = 9991 } = process.env;
if (!DB_HOST) {
    console.error('Error:BD_HOST is:', DB_HOST);
    process.exit(1);
}
mongoose_1.default.connect(DB_HOST)
    .then(() => {
    console.log("Database connect success");
    app_1.default.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
    .catch(error => {
    console.log(error);
    process.exit(1);
});
