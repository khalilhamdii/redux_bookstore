import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

export default function (state, action) {
  switch (action.type) {
    case CREATE_BOOK: {
      const { id, title, category } = action.payload;
      return [...state, { id, title, category }];
    }
    case REMOVE_BOOK: {
      const { id } = action.payload;
      return state.map(book => book.id !== id);
    }
    default:
      return state;
  }
}
