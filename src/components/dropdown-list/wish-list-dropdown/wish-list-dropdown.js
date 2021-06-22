import React from 'react';
import { connect } from 'react-redux';
import { bookRemovedFromWishList } from '../../../actions';
import DropdownList from '..';

const WishListDropdown = props => {
  return <DropdownList {...props} />;
};

const mapStateToProps = ({ wishListItems: { wishListItems } }) => {
  return {
    items: wishListItems,
  };
};

const mapDispatchToProps = {
  onDelete: bookRemovedFromWishList,
};

export default connect(mapStateToProps, mapDispatchToProps)(WishListDropdown);
