import booksDB from "..";
import { TBookAdd, TBooktGet } from "../../TS_types/books";
import { v4 as generateId } from 'uuid';
import updateBooks from "./helpers/updateBooks";

const addBook = async ({ title, author }: TBookAdd): Promise<TBooktGet> => {
    const newBook: TBooktGet = {
        id: generateId(),
        title,
        author
    }

    const list = await booksDB.getBooksAll();
    if (!list) {
        const newList: TBooktGet[] = [];
        newList.push(newBook);
        await updateBooks(newList);
        return newBook;
    }
    list.push(newBook);
    await updateBooks(list);
    return newBook;
}

export default addBook;