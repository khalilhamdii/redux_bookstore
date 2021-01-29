import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const initialState = {
  books: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_BOOK: {
      const { book } = action.payload;
      return [...state, book];
    }
    case REMOVE_BOOK: {
      const { id } = action.payload;
      return state.map(book => book.id !== id);
    }
    default:
      return state;
  }
}
