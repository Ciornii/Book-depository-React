import React, { useMemo, useState, useEffect } from 'react';
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
  const [activeCategory, setActiveCategory] = useState('');
  const [activeAuthor, setActiveAuthor] = useState('');
  const [filteredBy, setFilteredBy] = useState('');
  const [sortBy, setSortBy] = useState('Default');
  const [perPage, setPerPage] = useState(6);
  const [visible, setVisible] = useState(perPage);
  const [loadMoreBtn, setLoadMoreBtn] = useState(false);

  useEffect(() => {
    fetchBooks();
  }, []);

  const sortedBooks = useMemo(() => {
    if (sortBy && sortBy == 'a-z') {
      return orderBy(books, ['title'], ['asc']);
    } else if (sortBy && sortBy == 'z-a') {
      return orderBy(books, ['title'], ['desc']);
    } else {
      return books;
    }
  }, [sortBy, books]);

  const sortedAndFilteredBooks = useMemo(() => {
    setVisible(perPage);
    if (filteredBy == 'category') {
      return sortedBooks.filter(item => lowerCaseTrim(item.category).includes(activeCategory));
    } else if (filteredBy == 'author') {
      return sortedBooks.filter(item => lowerCaseTrim(item.author).includes(activeAuthor));
    }
    return books;
  }, [sortedBooks, activeCategory, activeAuthor]);

  useEffect(() => {
    setVisible(perPage);
  }, [perPage]);

  useEffect(() => {
    if (visible < sortedAndFilteredBooks.length) {
      setLoadMoreBtn(true);
    } else {
      setLoadMoreBtn(false);
    }
  }, [sortedAndFilteredBooks, visible]);

  const filterBooks = (elem, filter) => {
    setFilteredBy(filter);
    if (filter == 'category') {
      setActiveAuthor('');
      setActiveCategory(elem);
    } else if (filter == 'author') {
      setActiveCategory('');
      setActiveAuthor(elem);
    }
  };

  const showMoreBooks = () => {
    if (visible < sortedAndFilteredBooks.length) {
      setVisible(prevValue => prevValue + perPage);
    } else {
      setLoadMoreBtn(false);
    }
  };

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
                      onClick={() => filterBooks(lowerCaseTrim(elem), 'category')}
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
                      onClick={() => filterBooks(lowerCaseTrim(elem), 'author')}
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
                  Sort by:
                  <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                    <option value='Default' defaultValue disabled>
                      Default
                    </option>
                    <option value='a-z'>Name (A-Z)</option>
                    <option value='z-a'>Name (Z-A)</option>
                  </select>
                  <select value={perPage} onChange={e => setPerPage(e.target.value)}>
                    <option value='6'>6</option>
                    <option value='12'>12</option>
                  </select>
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
              <BookList books={sortedAndFilteredBooks} visible={visible} />
              <button
                className={`btn load-more ${!loadMoreBtn ? 'hide' : ''}`}
                onClick={showMoreBooks}
              >
                Load more
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = ({ bookList: { books } }) => {
  return { books };
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
