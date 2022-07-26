"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getAll_1 = __importDefault(require("./getAll"));
const getById_1 = __importDefault(require("./getById"));
const add_1 = __importDefault(require("./add"));
const put_1 = __importDefault(require("./put"));
const patch_1 = __importDefault(require("./patch"));
const remove_1 = __importDefault(require("./remove"));
const ctrls = {
    getAll: getAll_1.default,
    getById: getById_1.default,
    add: add_1.default,
    put: put_1.default,
    patch: patch_1.default,
    remove: remove_1.default,
};
exports.default = ctrls;
