import React from 'react';
import BooksList from '../containers/Bookslist';
import BooksForm from '../containers/Booksform';

function App() {
  return (
    <div>
      <BooksForm />
      <BooksList />
    </div>
  );
}

export default App;
