import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const SinglePage = ({ books }) => {
  let { id } = useParams();

  console.log(books);

  const book = books.filter(i => i.id == id);
  const { title, author, description, photo } = book[0];

  console.log(book);

  return (
    <div className='single-page'>
      <div className='container'>
        <div className='product__img'>
          <img src={photo} alt={title} />
        </div>
        <div className='product__bottom'>
          <div className='product__info'>
            <div className='product__title'>{title}</div>
            <div className='product__author'>by {author}</div>
            <div className='product__description'>{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ bookList: { books } }) => {
  return { books };
};

export default connect(mapStateToProps)(SinglePage);
