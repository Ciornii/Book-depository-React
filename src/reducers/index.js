import updateBookList from './book-list';
import updateMyListItems from './my-list';

const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    myListItems: updateMyListItems(state, action),
  };
};

export default reducer;
