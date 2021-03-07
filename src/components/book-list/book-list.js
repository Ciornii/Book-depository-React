import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';
import { withBookstoreService } from '../hoc';
import { fetchBooks, bookAddedToMyList } from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './book-list.scss';

const BookList = ({ books, onAddedToMyList }) => {
  return (
    <ul className='products__cards'>
      {books.map(book => {
        return (
          <li key={book.id} className='product__card'>
            <BookListItem book={book} onAddedToMyList={() => onAddedToMyList(book.id)} />
          </li>
        );
      })}
    </ul>
  );
};

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToMyList } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <BookList books={books} onAddedToMyList={onAddedToMyList} />;
  }
}

const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToMyList: (id) => dispatch(bookAddedToMyList(id))
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(BookListContainer);
