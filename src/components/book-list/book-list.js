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


const BookListContainer = ({
  books,
  loading,
  error,
  onAddedToMyList,
  onAddedToWishList,
  onDeleteFromMyList,
  onDeleteFromWishList,
  visible
}) => {

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <ul className='products__cards'>
      {books.slice(0, visible).map(book => {
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
