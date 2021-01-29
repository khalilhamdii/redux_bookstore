import React from 'react';
/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
function BooksForm() {
  const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <form>
      <label>Book Title</label>
      <input />
      <label>Categories</label>
      <select>
        <option value="">Select book category</option>
        {CATEGORIES.map(category => (
          <option>{category}</option>
        ))}
      </select>
      <button type="button">Submit</button>
    </form>
  );
}

export default BooksForm;
