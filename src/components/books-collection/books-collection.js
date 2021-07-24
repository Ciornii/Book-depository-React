import React from 'react';

const BooksCollection = ({ items, onDelete }) => {

  return (
    <>
      <ul>
        {items.map((item, idx) => {
          const { id, photo, title, author, bookLink, summaryLink } = item;

          return (
            <li key={id} className='list-item'>
              <div className='list-item__idx'>{idx + 1}.</div>
              <div className='list-item__img'>
                <img src={photo} alt={title} />
              </div>
              <div className='list-item__content'>
                <div className='list-item__title'>
                  <h2>{title}</h2>
                </div>
                <div className='list-item__author'>by {author}</div>
              </div>
              <button className='list-item__delete' onClick={() => onDelete(id)}>
                x
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default BooksCollection;
