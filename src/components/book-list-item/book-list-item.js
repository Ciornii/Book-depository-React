import React from 'react';
import './book-list-item.scss';

const BookListItem = ({ book }) => {
  const { title, author } = book;
  return (
    <>
      <span>{title}</span>
      <span>{author}</span>
    </>
  );
};

export default BookListItem;
