import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './book-list-item.scss';

const BookListItem = ({ book, onAddedToMyList, onAddedToWishList, myListItems, wishListItems}) => {
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
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 488.85 488.85'>
              <path d='M244.425,98.725c-93.4,0-178.1,51.1-240.6,134.1c-5.1,6.8-5.1,16.3,0,23.1c62.5,83.1,147.2,134.2,240.6,134.2s178.1-51.1,240.6-134.1c5.1-6.8,5.1-16.3,0-23.1C422.525,149.825,337.825,98.725,244.425,98.725z M251.125,347.025c-62,3.9-113.2-47.2-109.3-109.3c3.2-51.2,44.7-92.7,95.9-95.9c62-3.9,113.2,47.2,109.3,109.3C343.725,302.225,302.225,343.725,251.125,347.025z M248.025,299.625c-33.4,2.1-61-25.4-58.8-58.8c1.7-27.6,24.1-49.9,51.7-51.7c33.4-2.1,61,25.4,58.8,58.8C297.925,275.625,275.525,297.925,248.025,299.625z' />
            </svg>
            Quick View
          </a>
          <div className='product__btns'>
            <button onClick={onAddedToMyList} title='My Books' className={itemFromMyList ? 'active' : ''}>
              <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='m21 4h-1v-3c0-.552-.448-1-1-1h-15c-1.654 0-2.999 1.345-3 2.999v.001 18c0 1.654 1.346 3 3 3h17c.552 0 1-.448 1-1v-18c0-.552-.448-1-1-1zm-6 10.25c0 .686-.845 1.007-1.303.507l-2.197-2.397-2.197 2.397c-.458.502-1.303.178-1.303-.507v-7.25c0-.552.448-1 1-1h5c.552 0 1 .448 1 1zm3-10.25h-14c-.551 0-1-.449-1-1s.449-1 1-1h14z' />
              </svg>
            </button>
            <button onClick={onAddedToWishList} title='Wish List' className={itemFromWishList ? 'active' : ''}>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 492.719 492.719'>
                <path d='M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z' />
              </svg>
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
