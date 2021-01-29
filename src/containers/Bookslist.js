import React from 'react';
import { connect } from 'react-redux';

class BookList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table>
        {this.props.books.map(book => (
          <tr>
            <th>{book.id}</th>
            <th>{book.title}</th>
            <th>{book.category}</th>
          </tr>
        ))}
      </table>
    );
  }
}

const mapStateToProps = state => ({ books: state });

export default connect(mapStateToProps)(BookList);
