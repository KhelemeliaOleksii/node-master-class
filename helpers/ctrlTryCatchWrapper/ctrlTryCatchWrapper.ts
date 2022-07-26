import { Request, Response, NextFunction } from "express";

type Tctrl = (req: Request, res: Response) => Promise<void>;

const ctrlsTryCatchWrapper = (ctrl: Tctrl) => {
    const func = async (req: Request, res: Response, next: NextFunction) => {
        try {
            await ctrl(req, res);
        } catch (error) {
            next(error);
        }
    }
    return func;
}

export default ctrlsTryCatchWrapper;