const initialState = {
  books: [],
  loading: true,
  error: null,
  myListItems: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS_REQUESTED':
      return {
        ...state,
        books: [],
        loading: true,
        erorr: null,
      };
    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        loading: false,
        erorr: null,
      };
    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        books: [],
        loading: false,
        erorr: action.payload,
      };
    case 'BOOK_ADDED_TO_MY_LIST':
      const bookId = action.payload;
      const book = state.books.find(book => book.id == bookId);
      const newItem = {
        id: book.id,
        title: book.title,
        author: book.author,
        photo: book.photo,
        bookLink: book.bookLink,
        summaryLink: book.summaryLink
      };
      return {
        ...state,
        myListItems: [...state.myListItems, newItem]
      };
    default:
      return state;
  }
};

export default reducer;
