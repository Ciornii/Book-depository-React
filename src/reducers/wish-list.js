const updateWishList = (state, action) => {
  if (state === undefined || state.wishListItems === undefined) {
    return {
      wishListItems: [],
    };
  }

  const {
    bookList: { books },
    wishListItems: { wishListItems },
  } = state;

  const bookId = action.payload;
  const book = books.find(book => book.id == bookId);
  const idx = wishListItems.findIndex(({ id }) => id == bookId);
  const item = wishListItems[idx];

  switch (action.type) {
    case 'BOOK_ADDED_TO_WISH_LIST':
      const newItem = {
        id: book.id,
        title: book.title,
        author: book.author,
        photo: book.photo,
        bookLink: book.bookLink,
        summaryLink: book.summaryLink,
      };
      if (item) {
        return { wishListItems: wishListItems };
      } else {
        return {
          wishListItems: [...wishListItems, newItem],
        };
      }
    case 'BOOK_REMOVED_FROM_WISH_LIST':
      return {
        wishListItems: [...wishListItems.slice(0, idx), ...wishListItems.slice(idx + 1)],
      };
    default:
      return state.wishListItems;
  }
};

export default updateWishList;
