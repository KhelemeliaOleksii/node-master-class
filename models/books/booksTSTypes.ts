export type TBookAdd = {
    title: string,
    author: string,
    favorite?: boolean,
    genre: string,
    isbn: string,
}

export type TBookPutch = {
    title?: string,
    author?: string,
}

export type TBookGet = {
    _id: string,
    title: string,
    author: string,
    favorite: boolean,
    genre: string,
    isbn: string,
    createdAt: string,
    updatedAt: string,
}

