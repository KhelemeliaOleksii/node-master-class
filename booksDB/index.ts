import pathToBooksDB from './db/path';
import getBooksAll from './actions/getBooksAll';
import getBooksById from './actions/getBookById';
import deleteBookById from './actions/deleteBookById';
import addBook from './actions/addBook';
import updateBook from './actions/updateBook';
import patchBook from './actions/patchBook';

const booksDB = {
    path: pathToBooksDB,
    getBooksAll,
    getBooksById,
    deleteBookById,
    addBook,
    updateBook,
    patchBook
}

export default booksDB;