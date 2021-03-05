import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';
import { withBookstoreService } from '../hoc';
import { booksLoaded } from '../../actions';
import { compose } from '../../utils';

import './book-list.scss';

class BookList extends Component {
  componentDidMount() {
    // 1. receive data
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();

    // 2. dispatch action to store
    this.props.booksLoaded(data);
  }

  render() {
    const { books } = this.props;

    return (
      <ul className='products__cards'>
        {books.map(book => {
          return (
            <li key={book.id} className='product__card'>
              <BookListItem book={book} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ books }) => {
  return { books };
};

const mapDispatchToProps = {
  booksLoaded,
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(BookList);
