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
    <div style={{ padding: '30px' }}>
      <h1 style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--gray)' }}>ADD NEW BOOK</h1>
      <form
        className="d-md-flex d-lg-flex justify-content-between align-items-lg-center mt-3"
        onSubmit={event => handleSubmit(event)}
      >
        <input
          type="text"
          className="col-lg-6"
          placeholder="Book title"
          value={title}
          onChange={e => handleChange(e.target)}
          style={{ height: '45px', border: '1px solid #e8e8e8' }}
        />

        <select
          className="col-lg-3"
          onChange={e => handleChange(e.target)}
          style={{ height: '45px', color: 'var(--gray)', border: '1px solid #e8e8e8' }}
        >
          {/* <option key={7} value="">
          Select book category
        </option> */}
          <optgroup label="Select category">
            {CATEGORIES.map(category => (
              <option key={getKey(category)}>{category}</option>
            ))}
          </optgroup>
        </select>

        <input
          className="btn btn-primary col-lg-2"
          style={{ height: '45px', background: '#0290ff', fontSize: '13px' }}
          type="submit"
          value="ADD BOOK"
        />
      </form>
    </div>
  );
}

export default connect(null, { createBook })(BooksForm);
