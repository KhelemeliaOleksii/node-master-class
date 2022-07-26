"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ctrlsTryCatchWrapper = (ctrl) => {
    const func = async (req, res, next) => {
        try {
            await ctrl(req, res);
        }
        catch (error) {
            next(error);
        }
    };
    return func;
};
exports.default = ctrlsTryCatchWrapper;
