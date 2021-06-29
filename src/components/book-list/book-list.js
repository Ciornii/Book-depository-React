import React from 'react';
import { connect } from 'react-redux';
import BookListItem from '../book-list-item';
import {
  bookAddedToMyList,
  bookAddedToWishList,
  bookRemovedFromWishList,
  bookRemovedFromMyList,
} from '../../actions';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './book-list.scss';

const BookList = ({
  books,
  onAddedToMyList,
  onAddedToWishList,
  onDeleteFromMyList,
  onDeleteFromWishList,
}) => {
  return (
    <ul className='products__cards'>
      {books.map(book => {
        return (
          <li key={book.id} className='product__card'>
            <BookListItem
              book={book}
              onAddedToMyList={() => onAddedToMyList(book.id)}
              onAddedToWishList={() => onAddedToWishList(book.id)}
              onDeleteFromMyList={() => onDeleteFromMyList(book.id)}
              onDeleteFromWishList={() => onDeleteFromWishList(book.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

const BookListContainer = ({
  books,
  loading,
  error,
  onAddedToMyList,
  onAddedToWishList,
  onDeleteFromMyList,
  onDeleteFromWishList,
}) => {
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
      onDeleteFromMyList={onDeleteFromMyList}
      onDeleteFromWishList={onDeleteFromWishList}
    />
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onAddedToMyList: id => {
      dispatch(bookAddedToMyList(id));
      dispatch(bookRemovedFromWishList(id));
    },
    onAddedToWishList: id => {
      dispatch(bookAddedToWishList(id));
      dispatch(bookRemovedFromMyList(id));
    },
    onDeleteFromMyList: id => dispatch(bookRemovedFromMyList(id)),
    onDeleteFromWishList: id => dispatch(bookRemovedFromWishList(id)),
  };
};

export default connect(null, mapDispatchToProps)(BookListContainer);
