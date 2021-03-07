import React from 'react';
import './book-list-item.scss';

const BookListItem = ({ book, onAddedToMyList }) => {
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
            <button onClick={onAddedToMyList} title='My Books'>
              my books
            </button>
            <button title='Wish List'>wishlist</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookListItem;
