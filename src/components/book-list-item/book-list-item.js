import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

import Svg from '../svg';

import './book-list-item.scss';

const BookListItem = ({
  book,
  onAddedToMyList,
  onAddedToWishList,
  myListItems,
  wishListItems,
  onDeleteFromMyList,
  onDeleteFromWishList,
}) => {
  const { title, author, description, photo, id } = book;

  const [itemFromMyList, setItemFromMyList] = useState(false);
  const [itemFromWishList, setItemFromWishList] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
      onDeleteFromMyList();
    } else {
      onAddedToMyList();
    }
  };

  const wishListClickHandler = () => {
    if (wishListItems.some(e => e.id === id)) {
      onDeleteFromWishList();
    } else {
      onAddedToWishList();
    }
  };

  return (
    <>
      <div className='product__img'>
        <img src={photo} alt={title} />
      </div>
      <div className='product__bottom'>
        <Link to={`/${id}`} className='product__info'>
          <div className='product__title'>{title}</div>
          <div className='product__author'>by {author}</div>
          <div className='product__description'>{description}</div>
          <div className='product__read-more'>...</div>
        </Link>
        <div className='product__actions'>
          <button className='product__link' onClick={openModal}>
            <Svg name='eye' />
            Quick View
          </button>
          <div className='product__btns'>
            <button
              onClick={myListClickHandler}
              title='My Books'
              className={itemFromMyList ? 'active' : ''}
            >
              <Svg name='my-books' />
            </button>
            <button
              onClick={wishListClickHandler}
              title='Wish List'
              className={itemFromWishList ? 'active' : ''}
            >
              <Svg name='wishlist' />
            </button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Quick view"
        className='modal'
      >
        <div class="modal__close" onClick={closeModal}><Svg name='close' /></div>
        <div class="modal__inner">
          <div className="modal__img">
            <img src={photo} alt={title} />
          </div>
          <div className="modal__content">
            <div className="modal__title">
              {title}
            </div>
            <div className="modal__author">
              by {author}
            </div>
            <div className="modal__description">
              {description}
            </div>
          </div>
        </div>
      </Modal>
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
