import React from 'react';
// import PropTypes from 'prop-types';
/* eslint-disable react/prop-types */

function Book(props) {
  const { book } = props;
  return (
    <tr key={book.toString()}>
      <th>{book.id}</th>
      <th>{book.title}</th>
      <th>{book.category}</th>
      <th>
        <button type="button" onClick={() => props.handleRemoveBook(book)}>
          Remove Book
        </button>
      </th>
    </tr>
  );
}

// Book.propTypes = {
//   book: PropTypes.objectOf(PropTypes.object()),
// };

// Book.defaultProps = { book: {} };

export default Book;
