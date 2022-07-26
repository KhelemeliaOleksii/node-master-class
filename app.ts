import express,
{
    Request,
    Response,
    NextFunction
} from 'express';
import booksRouter from './routes/api/books'
import logger from 'morgan';
import cors from 'cors';
import serverLogger from './helpers/serverLogger/serverLogger'
// import DB_HOST from './config';
import dotenv from 'dotenv';
dotenv.config();

// const DB_HOST = `mongodb+srv://OleksiiKhelemelia:gFsjKaIR5fJLeajY
// @cluster0.oifwuxd.mongodb.net/books_reader?retryWrites=true&w=majority`;

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
app.use('/api/books', booksRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({ message: 'Not Found' });
});

app.use((err: TError, req: Request, res: Response, next: NextFunction) => {
    const { status = 500, message = 'Server Error' } = err;
    res.status(status).json({ message })
});
export default app; 