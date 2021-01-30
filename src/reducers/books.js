import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const initialState = {
  books: [],
  filter: '',
};

export default function books(state = initialState, action) {
  switch (action.type) {
    case CREATE_BOOK: {
      const { book } = action.payload;
      console.log(state);
      return { ...state, books: [...state.books, book] };
    }
    case REMOVE_BOOK: {
      const { id } = action.payload;
      return { ...state, books: state.books.filter(book => book.id !== id) };
    }
    default:
      return state;
  }
}
