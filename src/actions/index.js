export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

// let nextBookId = 0;

export const createBook = book => ({
  type: CREATE_BOOK,
  payload: {
    book,
  },
});

export const removeBook = book => ({
  type: REMOVE_BOOK,
  payload: { id: book.id },
});
