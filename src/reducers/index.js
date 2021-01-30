import { combineReducers } from 'redux';
import books from './books';
import categoryFilter from './filter';

export default combineReducers({ books, categoryFilter });
