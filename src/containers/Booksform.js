import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
function BooksForm(props) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const handleChange = target => {
    if (target.tagName === 'INPUT') {
      setTitle(target.value);
    } else if (target.tagName === 'SELECT') setCategory(target.options[target.selectedIndex].text);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const book = { title, category };
    props.createBook(book);
    setTitle('');
    setCategory('');
  };
  const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const getKey = category => {
    const key = CATEGORIES.indexOf(category);
    return key.toString();
  };

  return (
    <form onSubmit={event => handleSubmit(event)}>
      <label>Book Title</label>
      <input value={title} onChange={e => handleChange(e.target)} />
      <label>Categories</label>
      <select onChange={e => handleChange(e.target)}>
        <option key={7} value="" disabled>
          Select book category
        </option>
        {CATEGORIES.map(category => (
          <option key={getKey(category)}>{category}</option>
        ))}
      </select>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default connect(null, { createBook })(BooksForm);
