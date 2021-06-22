import React from 'react';
import classNames from 'classnames';
import Svg from '../svg';

const DropdownList = ({ items, onDelete, active, title, close, link, className }) => {
  const classes = classNames('popup-list', className, { active });

  const renderRow = item => {
    const { id, title, author } = item;

    return (
      <li key={id} className='popup-list__item'>
        <div className='popup-list__title'>{title}</div>
        <div className='popup-list__author'>by {author}</div>
        <button className='popup-list__delete' onClick={() => onDelete(id)}>
          <Svg name='delete' />
        </button>
      </li>
    );
  };

  return (
    <div className={classes}>
      <div className='popup-list__main-title'>{title}</div>
      <div className='popup-list__close' onClick={() => close(false)}>
        <Svg name='close' />
      </div>
      <ul className='popup-list__wrapper'>{items.map(renderRow)}</ul>
      <a href={link} className='popup-list__more'>
        View Full List
      </a>
      <div className='popup-list__triangle'></div>
    </div>
  );
};

export default DropdownList;
