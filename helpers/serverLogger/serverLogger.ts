import {
    Request,
    Response,
    NextFunction
} from 'express'

import date from 'moment'
import { appendFile } from 'fs/promises';

const serverLogger = (formats: string) =>
    async (req: Request, res: Response, next: NextFunction) => {
        if (formats === 'dev') {
            const { method, url } = req;
            const currentDate: string = date().format('YYYY-MM-DD_hh:mm:ss');
            await appendFile('server.log', `${method} ${url} ${currentDate}`);
        }
        next();
    }

export default serverLogger;