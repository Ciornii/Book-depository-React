const updateMyList = (state, action) => {
  if (state === undefined) {
    return {
      myListItems: [],
    };
  }

  const {
    bookList: { books },
    myListItems: { myListItems },
  } = state;
  
  const bookId = action.payload;
  const book = books.find(book => book.id == bookId);
  const idx = myListItems.findIndex(({ id }) => id == bookId);
  const item = myListItems[idx];

  switch (action.type) {
    case 'BOOK_ADDED_TO_MY_LIST':
      const newItem = {
        id: book.id,
        title: book.title,
        author: book.author,
        photo: book.photo,
        bookLink: book.bookLink,
        summaryLink: book.summaryLink,
      };
      if (item) {
        return { myListItems: myListItems };
      } else {
        return {
          myListItems: [...myListItems, newItem],
        };
      }
    case 'BOOK_REMOVED_FROM_MY_LIST':
      return {
        myListItems: [...myListItems.slice(0, idx), ...myListItems.slice(idx + 1)],
      };
    default:
      return state.myListItems;
  }
};

export default updateMyList;