import React from 'react';
import { connect } from 'react-redux';
import { bookRemovedFromMyList } from '../../../actions';
import DropdownList from '..';

const MyListDropdown = props => {
  return <DropdownList {...props} />;
};

const mapStateToProps = ({ myListItems: { myListItems } }) => {
  return {
    items: myListItems,
  };
};

const mapDispatchToProps = {
  onDelete: bookRemovedFromMyList,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyListDropdown);
