import { readFile } from 'fs/promises';
import { defaultFormat } from 'moment';
import booksDB from '../../booksDB';
import { TBooktGet } from '../../TS_types/books'

const getBooksAll = async (): Promise<TBooktGet[] | null> => {
    const data = await readFile(booksDB.path, 'utf-8');
    if (!data) {
        return null;
    }
    const result: TBooktGet[] | null = JSON.parse(data);
    return result;
}

export default getBooksAll;

