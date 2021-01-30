export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CHANGE_FILTER = 'CHANGE_FILTER';
/* eslint-disable no-plusplus */
let nextBookId = 3;

export const createBook = book => ({
  type: CREATE_BOOK,
  payload: {
    book: { ...book, id: ++nextBookId },
  },
});

export const removeBook = book => ({
  type: REMOVE_BOOK,
  payload: { id: book.id },
});

export const changeFilter = filter => ({ type: CHANGE_FILTER, payload: { filter } });
