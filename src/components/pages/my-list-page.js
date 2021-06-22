import React from 'react';
import { connect } from 'react-redux';
import { bookRemovedFromMyList } from '../../actions';
import BooksCollection from '../books-collection';

const MyListPage = ({ items, onDelete }) => {
  return <BooksCollection items={items} onDelete={onDelete} />;
};

const mapStateToProps = ({ myListItems: { myListItems } }) => {
  return {
    items: myListItems,
  };
};

const mapDispatchToProps = {
  onDelete: bookRemovedFromMyList,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyListPage);
