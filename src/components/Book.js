import React from 'react';
function Book(props) {
  const book = props.book;
  return (
    <tr>
      <th>{book.id}</th>
      <th>{book.title}</th>
      <th>{book.category}</th>
    </tr>
  );
}

export default Book;
