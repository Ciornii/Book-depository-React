import updateBookList from './book-list';
import updateMyList from './my-list';

const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    myListItems: updateMyList(state, action),
  };
};

export default reducer;
