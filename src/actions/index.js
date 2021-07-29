const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUESTED',
  };
};

const booksLoaded = newBooks => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks,
  };
};

const booksError = error => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error,
  };
};

export const bookAddedToMyList = bookId => {
  return {
    type: 'BOOK_ADDED_TO_MY_LIST',
    payload: bookId,
  };
};

export const bookRemovedFromMyList = bookId => {
  return {
    type: 'BOOK_REMOVED_FROM_MY_LIST',
    payload: bookId,
  };
};

export const bookAddedToWishList = bookId => {
  return {
    type: 'BOOK_ADDED_TO_WISH_LIST',
    payload: bookId,
  };
};

export const bookRemovedFromWishList = bookId => {
  return {
    type: 'BOOK_REMOVED_FROM_WISH_LIST',
    payload: bookId,
  };
};

export const termAdded = searchTerm => {
  return {
    type: 'TERM_ADDED',
    payload: searchTerm,
  };
};

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookstoreService
    .getBooks()
    .then(data => dispatch(booksLoaded(data)))
    .catch(err => dispatch(booksError(err)));
};

export { fetchBooks };
