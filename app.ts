import express,
{
    Request,
    Response,
    NextFunction
} from 'express';

import logger from 'morgan';
import cors from 'cors';
import serverLogger from './helpers/serverLogger/serverLogger'
import DB_HOST from './config';
import mongoose from 'mongoose';

mongoose.connect(DB_HOST)
    .then(() => console.log("Database connect success"))
    .catch(error => error?.message);

type TError = {
    status: number,
    message: string
}

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : "short";
app.use(logger(formatsLogger))
app.use(cors());
app.use(express.json());
app.use(serverLogger(formatsLogger));
app.use('.api/books', booksRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({ message: 'Not Found' });
});

app.use((err: TError, req: Request, res: Response, next: NextFunction) => {
    const { status = 500, message = 'Server Error' } = err;
    res.status(status).json({ message })
});
export default app; 