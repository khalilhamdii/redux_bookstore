import React from 'react';
// import PropTypes from 'prop-types';
/* eslint-disable react/prop-types */

function Book(props) {
  const { book } = props;
  return (
    <div
      className="d-flex flex-md-row flex-column mb-4"
      style={{ background: 'var(--white)', padding: '30px', boxShadow: '0px 0px 0px 1px #eeeeee' }}
    >
      <div className="d-flex flex-column col-md-5">
        <span style={{ fontSize: '14px', color: 'var(--gray)', fontWeight: 'bold' }}>
          {book.category}
        </span>
        <span
          style={{
            fontFamily: "'Roboto Slab', serif",
            fontSize: '22px',
            color: '#121212',
            fontWeight: 'bold',
          }}
        >
          {book.title}
        </span>
        <span style={{ color: '#0290ff', fontSize: '14px', fontFamily: "'Roboto Slab', serif" }}>
          Author
        </span>
        <ul className="list-inline mt-4">
          <li
            className="list-inline-item"
            style={{
              fontSize: '14px',
              color: '#0290ff',
              fontFamily: "'Roboto Slab', serif",
              marginRight: '20px',
            }}
          >
            <button
              className="btn btn-primary btn-sm"
              type="button"
              style={{
                background: 'transparent',
                color: '#0290ff',
                borderStyle: 'solid',
                borderColor: '#0290ff',
                width: '75px',
              }}
              disabled
            >
              Edit
            </button>
          </li>
          <li
            className="list-inline-item"
            style={{
              fontSize: '14px',
              color: '#0290ff',
              fontFamily: "'Roboto Slab', serif",
              marginRight: '20px',
              paddingLeft: '20px',
              borderLeftStyle: 'solid',
              borderLeftColor: '#e8e8e8',
            }}
          >
            <button
              onClick={() => props.handleRemoveBook(book)}
              className="btn btn-primary btn-sm"
              type="button"
              style={{
                background: 'transparent',
                color: '#0290ff',
                borderStyle: 'solid',
                borderColor: '#0290ff',
                width: '75px',
              }}
            >
              Remove
            </button>
          </li>
        </ul>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-sm-center justify-content-lg-center align-items-lg-center col-md-3">
        <span style={{ fontSize: '32px', color: '#121212' }}>64%</span>
        <span style={{ fontSize: '14px', color: 'var(--gray)' }}>Completed</span>
      </div>
      <div className="d-flex flex-column col-md-4">
        <span style={{ fontSize: '13px', color: 'var(--gray)' }}>CURRENT CHAPTER</span>
        <span style={{ fontFamily: "'Roboto Slab', serif" }}>Chapter 17</span>
        <button
          className="btn btn-primary mt-4"
          type="button"
          style={{ background: '#0290ff', fontFamily: "'Roboto Slab', serif" }}
          disabled
        >
          Update progress
        </button>
      </div>
    </div>
  );
}

// Book.propTypes = {
//   book: PropTypes.objectOf(PropTypes.object()),
// };

// Book.defaultProps = { book: {} };

export default Book;
