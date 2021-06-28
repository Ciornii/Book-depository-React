import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Svg from '../svg';

import './book-list-item.scss';

const BookListItem = ({ book, onAddedToMyList, onAddedToWishList, myListItems, wishListItems, onDeleteFromMyList,
  onDeleteFromWishList }) => {
  const { title, author, description, photo, id } = book;

  const [itemFromMyList, setItemFromMyList] = useState(false);
  const [itemFromWishList, setItemFromWishList] = useState(false);

  useEffect(() => {
    if (myListItems.some(e => e.id === id)) {
      setItemFromMyList(true);
    } else {
      setItemFromMyList(false);
    }
    if (wishListItems.some(e => e.id === id)) {
      setItemFromWishList(true);
    } else {
      setItemFromWishList(false);
    }
  }, [myListItems, wishListItems]);

  const myListClickHandler = () => {
    if (myListItems.some(e => e.id === id)) {
      onDeleteFromMyList()
    } else {
      onAddedToMyList()
    }
  }

  const wishListClickHandler = () => {
    if (wishListItems.some(e => e.id === id)) {
      onDeleteFromWishList()
    } else {
      onAddedToWishList()
    }
  }

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
            <Svg name='eye' />
            Quick View
          </a>
          <div className='product__btns'>
            <button onClick={myListClickHandler} title='My Books' className={itemFromMyList ? 'active' : ''}>

              <Svg name='my-books' />
            </button>
            <button onClick={wishListClickHandler} title='Wish List' className={itemFromWishList ? 'active' : ''}>

              <Svg name='wishlist' />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ myListItems: { myListItems }, wishListItems: { wishListItems } }) => {
  return {
    myListItems: myListItems,
    wishListItems: wishListItems,
  };
};

export default connect(mapStateToProps)(BookListItem);
