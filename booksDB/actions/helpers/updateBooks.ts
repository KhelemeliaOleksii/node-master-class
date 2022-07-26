import { writeFile } from "fs/promises";
import { TBooktGet } from "../../../TS_types/books";
import booksDB from "../..";

const updateBooks = async (list: TBooktGet[]): Promise<void> => {
    await writeFile(booksDB.path, JSON.stringify(list, null, 2));
}

export default updateBooks;