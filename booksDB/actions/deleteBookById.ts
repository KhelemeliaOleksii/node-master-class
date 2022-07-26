import booksDB from "..";
import { TBooktGet } from "../../TS_types/books";

const deleteBookById = async (bookId): Promise<TBooktGet | null> => {
    const list = await booksDB.getBooksAll();
    if (!list) {
        return null;
    }
    const idx = list.findIndex(item => bookId === item.id);
    if (idx === -1) {
        return null;
    }
    const [result] = list.splice(idx, 1);
    return result;
}

export default deleteBookById;