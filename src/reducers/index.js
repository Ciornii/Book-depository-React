import updateBookList from './book-list';
import updateMyList from './my-list';
import updateWishList from './wish-list';

const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    myListItems: updateMyList(state, action),
    wishListItems: updateWishList(state, action),
  };
};

export default reducer;
