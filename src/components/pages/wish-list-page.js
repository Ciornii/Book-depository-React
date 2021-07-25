import React from 'react';
import { connect } from 'react-redux';
import { bookRemovedFromWishList } from '../../actions';
import BooksCollection from '../books-collection';

const WishListPage = ({ items, onDelete }) => {
  return <BooksCollection items={items} onDelete={onDelete} />;
};

const mapStateToProps = ({ wishListItems: { wishListItems } }) => {
  return {
    items: wishListItems,
  };
};

const mapDispatchToProps = {
  onDelete: bookRemovedFromWishList,
};

export default connect(mapStateToProps, mapDispatchToProps)(WishListPage);
