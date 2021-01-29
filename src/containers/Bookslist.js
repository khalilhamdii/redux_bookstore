import React from 'react';
import { connect } from 'react-redux';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <table>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Book 1</td>
          <td>Romance</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Book 2</td>
          <td>Adventure</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Book 3</td>
          <td>Thriller</td>
        </tr>
      </table>
    );
  }
}

export default connect(action)(BookList);
