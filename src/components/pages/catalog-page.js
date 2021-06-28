import React, { useState } from 'react';
import BookList from '../book-list';
import Sorting from '../Sorting';
import { lowerCaseTrim } from '../../utils';
import Svg from '../svg';

const categories = [
  'Biographies',
  'Business',
  'Financial education',
  'Literature',
  'Personal development',
  'Time management',
];

const authors = [
  'Bodo Schaefer',
  'Brian Tracy',
  'Dale Carnegie',
  'Hal Elrod',
  'John Kehoe',
  'Napoleon Hill',
  'Robert Kiyosaki',
  'Robin Sharma',
  'Stephen Covey',
  'Anthony Robbins',
];

const CatalogPage = () => {
  const [activeCategory, setActiveCategory] = useState('');
  const [activeAuthor, setActiveAuthor] = useState('');

  // ! implement with ref

  return (
    <>
      <section className='products'>
        <div className='container'>
          <div className='products__inner'>
            <div className='products__filter'>
              <div className='products__categories'>
                <h2>Categories</h2>
                <ul>
                  {categories.map((elem, idx) => (
                    <li
                      key={idx}
                      onClick={() => setActiveCategory(lowerCaseTrim(elem))}
                      className={
                        lowerCaseTrim(activeCategory) ==
                          lowerCaseTrim(elem) ? 'active' : ''
                      }
                    >
                      {elem}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='products__authors'>
                <h2>Authors</h2>
                <ul>
                  {authors.map((elem, idx) => (
                    <li
                      key={idx}
                      onClick={() => setActiveAuthor(lowerCaseTrim(elem))}
                      className={
                        lowerCaseTrim(activeAuthor) ==
                          lowerCaseTrim(elem) ? 'active' : ''
                      }
                    >
                      {elem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='products__results'>
              <div className='products__settings'>
                <Sorting />
                <div className='products__views'>
                  <div className='products__view products__view--active'>
                    <Svg name='grid-view' />
                  </div>
                  <div className='products__view'>
                    <Svg name='list-view' />
                  </div>
                </div>
              </div>
              <BookList
                activeCategory={activeCategory}
                activeAuthor={activeAuthor}
                setActiveCategory={setActiveCategory}
                setActiveAuthor={setActiveAuthor}
              />
              <button className='btn load-more' id='loadMore'>
                Load more
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CatalogPage;
