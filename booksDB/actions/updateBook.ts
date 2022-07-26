import getBooksAll from "./getBooksAll";
import { TBooktGet, TBookAdd } from "../../TS_types/books";
import updateBooks from "./helpers/updateBooks";

const updateBook = async (bookId: string, updates: TBookAdd): Promise<TBooktGet | null> => {
    const list = await getBooksAll();
    if (!list) {
        return null;
    }
    const idx = list.findIndex(item => item.id === bookId);
    if (idx === -1) {
        return null;
    }
    list[idx] = {
        ...list[idx],
        ...updates
    }
    await updateBooks(list);
    return list[idx];
}

export default updateBook;