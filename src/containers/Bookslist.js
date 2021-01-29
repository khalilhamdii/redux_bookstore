import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
/* eslint-disable react/prop-types */
function BookList(props) {
  const { books } = props;
  return (
    <table>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>category</th>
      </tr>
      {books.map(book => (
        <tr key={book.id.toString()}>
          <th>{book.id}</th>
          <th>{book.title}</th>
          <th>{book.category}</th>
        </tr>
      ))}
    </table>
  );
}

// BookList.propTypes = {
//   books: PropTypes.arrayOf(PropTypes.array()),
// };

BookList.defaultProps = { books: [] };

const mapStateToProps = state => ({ books: state.books });

export default connect(mapStateToProps)(BookList);
