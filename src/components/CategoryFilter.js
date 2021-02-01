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
    <div className="mb-4">
      <span className="ml-4" style={{ color: 'var(--gray)' }}>
        FILTER BY CATEGORY :
      </span>
      <select
        onChange={e => handleFilterChange(e.target)}
        className="ml-2"
        style={{ height: '45px', color: 'var(--gray)', border: '1px solid #e8e8e8' }}
      >
        <option key={7} value="" selected disabled>
          Filter by category
        </option>
        {CATEGORIES.map(category => (
          <option key={getKey(category)}>{category}</option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
