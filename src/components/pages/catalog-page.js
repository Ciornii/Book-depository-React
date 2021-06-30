import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import BookList from '../book-list';
import { lowerCaseTrim } from '../../utils';
import Svg from '../svg';
import { withBookstoreService } from '../hoc';
import { fetchBooks } from '../../actions';
import { compose } from '../../utils';
import _ from 'lodash';

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

const CatalogPage = ({ books }) => {
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [activeCategory, setActiveCategory] = useState('');
  const [activeAuthor, setActiveAuthor] = useState('');
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    if (activeCategory) {
      setFilteredBooks(books.filter(item => lowerCaseTrim(item.category).includes(activeCategory)));
      setActiveAuthor('');
    }
  }, [activeCategory]);

  useEffect(() => {
    if (activeAuthor) {
      setFilteredBooks(books.filter(item => lowerCaseTrim(item.author).includes(activeAuthor)));
      setActiveCategory('');
    }
  }, [activeAuthor]);

  useEffect(() => {
    if (sortBy) {
      if (sortBy == 'a-z') {
        setFilteredBooks(_.orderBy(filteredBooks, ['title'], ['asc']));
      } else if (sortBy == 'z-a') {
        setFilteredBooks(_.orderBy(filteredBooks, ['title'], ['desc']));
      }
    }
  }, [sortBy]);

  // ! to implement with ref

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
                        lowerCaseTrim(activeCategory) == lowerCaseTrim(elem) ? 'active' : ''
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
                      className={lowerCaseTrim(activeAuthor) == lowerCaseTrim(elem) ? 'active' : ''}
                    >
                      {elem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='products__results'>
              <div className='products__settings'>
                <div className='products__sorting'>
                  <form method='get' action=''>
                    Sort by:
                    <select onChange={e => setSortBy(e.target.value)}>
                      <option value='' defaultValue disabled>
                        Default
                      </option>
                      <option value='a-z'>Name (A-Z)</option>
                      <option value='z-a'>Name (Z-A)</option>
                    </select>
                  </form>
                  <form method='get' action=''>
                    <select>
                      <option value='6' defaultValue>
                        6
                      </option>
                      <option value='12'>12</option>
                    </select>
                  </form>
                </div>
                <div className='products__views'>
                  <div className='products__view products__view--active'>
                    <Svg name='grid-view' />
                  </div>
                  <div className='products__view'>
                    <Svg name='list-view' />
                  </div>
                </div>
              </div>
              <BookList books={filteredBooks} />
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

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(CatalogPage);

// Without compose:
// export default withBookstoreService()(
//   connect(mapStateToProps, mapDispatchToProps)(CatalogPage)
// );
