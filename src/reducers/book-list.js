const updateBookList = (state, action) => {
  if (state === undefined) {
    return {
      books: [],
      loading: true,
      error: null,
    };
  }

  switch (action.type) {
    case 'FETCH_BOOKS_REQUESTED':
      return {
        books: [],
        loading: true,
        erorr: null,
      };
    case 'FETCH_BOOKS_SUCCESS':
      return {
        books: action.payload,
        loading: false,
        erorr: null,
      };
    case 'FETCH_BOOKS_FAILURE':
      return {
        books: [],
        loading: false,
        erorr: action.payload,
      };
    default:
      return state.bookList;
  }
};

export default updateBookList;