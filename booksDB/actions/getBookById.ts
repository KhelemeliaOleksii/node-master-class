import booksDB from '../../booksDB';
import { TBooktGet } from '../../TS_types/books';

const getBookById = async (bookId): Promise<TBooktGet | null> => {
    const books: TBooktGet[] | null = await booksDB.getBooksAll();
    if (!books) {
        return null;
    }
    const result: TBooktGet | undefined = books.find(item => item.id === bookId);
    if (!result) {
        return null;
    }
    return result;
}

export default getBookById;
