import BookInnerSchema from './booksModel';
import BookExternalSchema from './booksCustomSchema';

const BookModel = {
    inner: BookInnerSchema,
    outer: BookExternalSchema
}

export default BookModel;