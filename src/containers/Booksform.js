import React from 'react';
function BooksForm() {
  const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const addCategory = () => {
    CATEGORIES.map((category) => <option>{category}</option>);
  };
  return (
    <form>
      <label>Book Title</label>
      <input />
      <label for="categories">Categories</label>
      <select>
        <option value="">Select book category</option>
        {addCategory()}
      </select>
      <button>Submit</button>
    </form>
  );
}

export default BooksForm;
