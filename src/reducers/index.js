import updateBookList from './book-list';
import updateMyList from './my-list';
import updateWishList from './wish-list';
import updateSearchTerm from './search-term';

const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    myListItems: updateMyList(state, action),
    wishListItems: updateWishList(state, action),
    searchTerm: updateSearchTerm(state, action),
  };
};

export default reducer;
