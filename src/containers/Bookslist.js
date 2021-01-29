import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions/index';
// import PropTypes from 'prop-types';
/* eslint-disable react/prop-types */
function BookList(props) {
  const { books } = props;
  const handleRemoveBook = book => {
    props.removeBook(book);
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>category</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
        ))}
      </tbody>
    </table>
  );
}

// BookList.propTypes = {
//   books: PropTypes.arrayOf(PropTypes.array()),
// };

BookList.defaultProps = { books: [] };

const mapStateToProps = state => ({ books: state.books });

export default connect(mapStateToProps, { removeBook })(BookList);
