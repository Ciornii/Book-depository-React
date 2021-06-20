import React from 'react';
import { connect } from 'react-redux';

import { bookRemovedFromMyList } from '../../actions';

const DropdownList = ({ items, onDelete, active, title, close, link }) => {
  const renderRow = (item) => {
    const { id, title, author } = item;

    return (
      <li key={id} className="popup-list__item">
        <div className="popup-list__title">{title}</div>
        <div className="popup-list__author">by {author}</div>
        <button className="popup-list__delete" onClick={() => onDelete(id)}>
          x
        </button>
      </li>
    );
  };

  return (
    <div className={`popup-list ${active && 'active'}`}>
      <div className='popup-list__main-title'>{title}</div>
      <div className='popup-list__close' onClick={() => close(false)}>x</div>
      <ul className='popup-list__wrapper'>{items.map(renderRow)}</ul>
      <a href={link} className='popup-list__more'>View Full List</a>
      <div className='popup-list__triangle'></div>
    </div>
  );
};

const mapStateToProps = ({ myListItems: { myListItems } }) => {
  return {
    items: myListItems,
  };
};

const mapDispatchToProps = {
  onDelete: bookRemovedFromMyList,
};

export default connect(mapStateToProps, mapDispatchToProps)(DropdownList);
