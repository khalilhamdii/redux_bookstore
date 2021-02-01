import React from 'react';
import BooksList from '../containers/Bookslist';
import BooksForm from '../containers/Booksform';

function App() {
  return (
    <div className="container mt-5">
      <BooksForm />
      <BooksList />
    </div>
  );
}

export default App;
