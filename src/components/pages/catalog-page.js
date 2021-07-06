import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import BookList from '../book-list';
import { lowerCaseTrim } from '../../utils';
import Svg from '../svg';
import { withBookstoreService } from '../hoc';
import { fetchBooks } from '../../actions';
import { compose } from '../../utils';
import orderBy from 'lodash/orderBy';

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
  const [result, setResult] = useState(books);
  const [activeCategory, setActiveCategory] = useState('');
  const [activeAuthor, setActiveAuthor] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [visible, setVisible] = useState(6);

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    if (activeCategory) {
      const filteredByCategory = books.filter(item => lowerCaseTrim(item.category).includes(activeCategory));
      sorting(filteredByCategory);
      setActiveAuthor('');
    }
  }, [activeCategory]);

  useEffect(() => {
    if (activeAuthor) {
      const filterdByAuthor = books.filter(item => lowerCaseTrim(item.author).includes(activeAuthor));
      sorting(filterdByAuthor);
      setActiveCategory('');
    }
  }, [activeAuthor]);

  useEffect(() => {
    if (sortBy) {
      sorting(result);
    }
  }, [sortBy]);

  const sorting = (filteredBooks) => {
    if (sortBy == 'a-z') {
      setResult(orderBy(filteredBooks, ['title'], ['asc']));
    } else if (sortBy == 'z-a') {
      setResult(orderBy(filteredBooks, ['title'], ['desc']));
    } else {
      setResult(filteredBooks);
    }
  }

  const showMoreBooks = () => {
    setVisible((prevValue) => prevValue + 6);
  }


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
              <BookList books={result} visible={visible} />
              <button className='btn load-more' onClick={showMoreBooks}>
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
