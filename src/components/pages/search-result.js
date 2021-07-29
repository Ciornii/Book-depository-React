import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { lowerCaseTrim } from '../../utils';
import {
  bookAddedToMyList,
  bookAddedToWishList,
  bookRemovedFromWishList,
  bookRemovedFromMyList,
} from '../../actions';

import BookListItem from '../book-list-item';

const SearchResults = ({
  books,
  searchTerm,
  onAddedToMyList,
  onAddedToWishList,
  onDeleteFromMyList,
  onDeleteFromWishList,
}) => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (searchTerm && searchTerm !== '') {
      setResult(
        books.filter(
          item =>
            lowerCaseTrim(item.title).includes(searchTerm) ||
            lowerCaseTrim(item.author).includes(searchTerm),
        ),
      );
    } else {
      setResult([]);
    }

    console.log(result);
  }, [searchTerm]);

  return (
    <div className='container'>
      <ul className='products__cards'>
        {result && result.length !== 0 ? (
          result.map(book => {
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
          })
        ) : (
          <p>No results</p>
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ bookList: { books }, searchTerm: { searchTerm } }) => {
  return {
    books,
    searchTerm,
  };
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
