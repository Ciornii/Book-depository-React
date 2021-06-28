import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import BookListItem from '../book-list-item';
import { withBookstoreService } from '../hoc';
import {
  fetchBooks,
  bookAddedToMyList,
  bookAddedToWishList,
  bookRemovedFromWishList,
  bookRemovedFromMyList,
} from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { lowerCaseTrim } from '../../utils';

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
  activeCategory,
  activeAuthor,
  setActiveAuthor,
  setActiveCategory,
}) => {
  const [filteredBooks, setFilteredBooks] = useState(books);

  useEffect(() => {
    fetchBooks();
  });

  useEffect(() => {
    if (activeCategory) {
      setFilteredBooks(
        books.filter(item =>
          lowerCaseTrim(item.category).includes(activeCategory),
        ),
      );
      setActiveAuthor('');
    }
  }, [activeCategory]);

  useEffect(() => {
    if (activeAuthor) {
      setFilteredBooks(
        books.filter(item =>
          lowerCaseTrim(item.author).includes(activeAuthor),
        ),
      );
      setActiveCategory('');
    }
  }, [activeAuthor]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <BookList
      books={filteredBooks}
      onAddedToMyList={onAddedToMyList}
      onAddedToWishList={onAddedToWishList}
      onDeleteFromMyList={onDeleteFromMyList}
      onDeleteFromWishList={onDeleteFromWishList}
    />
  );
};

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
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

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(BookListContainer);

// Without compose:
// export default withBookstoreService()(
//   connect(mapStateToProps, mapDispatchToProps)(BookListContainer)
// );
