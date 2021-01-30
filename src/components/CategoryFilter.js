import React from 'react';
/* eslint-disable react/prop-types */

function CategoryFilter(props) {
  const CATEGORIES = [
    'All',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  const getKey = category => {
    const key = CATEGORIES.indexOf(category);
    return key.toString();
  };

  const handleFilterChange = target => {
    const filter = target.options[target.selectedIndex].text;
    props.handleFilterChange(filter);
  };
  return (
    <select onChange={e => handleFilterChange(e.target)}>
      <option key={7} value="" disabled>
        Filter book by category
      </option>
      {CATEGORIES.map(category => (
        <option key={getKey(category)}>{category}</option>
      ))}
    </select>
  );
}

export default CategoryFilter;
