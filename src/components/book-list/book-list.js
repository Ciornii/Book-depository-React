import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';
import { withBookstoreService } from '../hoc';
import { fetchBooks, bookAddedToMyList, bookAddedToWishList } from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './book-list.scss';

const BookList = ({ books, onAddedToMyList, onAddedToWishList }) => {
  return (
    <ul className='products__cards'>
      {books.map(book => {
        return (
          <li key={book.id} className='product__card'>
            <BookListItem
              book={book}
              onAddedToMyList={() => onAddedToMyList(book.id)}
              onAddedToWishList={() => onAddedToWishList(book.id)}
            />
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
    const { books, loading, error, onAddedToMyList, onAddedToWishList } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <BookList
        books={books}
        onAddedToMyList={onAddedToMyList}
        onAddedToWishList={onAddedToWishList}
      />
    );
  }
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToMyList: id => dispatch(bookAddedToMyList(id)),
    onAddedToWishList: id => dispatch(bookAddedToWishList(id)),
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(BookListContainer);

// Without compose:
// export default withBookstoreService()(
//   connect(mapStateToProps, mapDispatchToProps)(BookListContainer)
// );
