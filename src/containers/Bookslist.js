import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { removeBook, changeFilter } from '../actions/index';
// import PropTypes from 'prop-types';
/* eslint-disable react/prop-types */
function BookList(props) {
  const { books } = props;
  const handleRemoveBook = book => {
    props.removeBook(book);
  };
  const handleFilterChange = filter => {
    props.changeFilter(filter);
  };
  return (
    <>
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>category</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0
            ? books.map(book => (
              <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
            ))
            : null}
        </tbody>
      </table>
    </>
  );
}

// BookList.propTypes = {
//   books: PropTypes.arrayOf(PropTypes.array()),
// };

BookList.defaultProps = { books: [] };

const mapStateToProps = state => {
  const { books } = state;
  const { filter } = state.categoryFilter;
  const booksArr = books.books;
  let filtredBooks = {};
  switch (filter) {
    case 'All':
      filtredBooks = booksArr;
      break;
    case 'Action':
      filtredBooks = booksArr.filter(book => book.category === 'Action');
      break;
    case 'Biography':
      filtredBooks = booksArr.filter(book => book.category === 'Biography');
      break;
    case 'History':
      filtredBooks = booksArr.filter(book => book.category === 'History');
      break;
    case 'Horror':
      filtredBooks = booksArr.filter(book => book.category === 'Horror');
      break;
    case 'Kids':
      filtredBooks = booksArr.filter(book => book.category === 'Kids');
      break;
    case 'Learning':
      filtredBooks = booksArr.filter(book => book.category === 'Learning');
      break;
    case 'Sci-Fi':
      filtredBooks = booksArr.filter(book => book.category === 'Sci-Fi');
      break;
    default:
      filtredBooks = booksArr;
  }
  return { books: filtredBooks };
};

export default connect(mapStateToProps, { removeBook, changeFilter })(BookList);
