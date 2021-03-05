import React from 'react';
import './book-list-item.scss';

const BookListItem = ({ book }) => {
  const { title, author, description, photo } = book;
  return (
    <>
      <div className='product__img'>
        <img src={photo} alt={title} />
      </div>
      <div className='product__bottom'>
        <div className='product__info'>
          <div className='product__title'>{title}</div>
          <div className='product__author'>by {author}</div>
          <div className='product__description'>{description}</div>
          <div className='product__read-more'>...</div>
        </div>
        <div className='product__actions'>
          <a href='#' className='product__link'>
            Quick View
          </a>
          <div className='product__btns'>
            <button data-add-to='My Books' title='My Books'></button>
            <button data-add-to='Wish List' title='Wish List'></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookListItem;
