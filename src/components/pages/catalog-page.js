import React from 'react';
import BookList from '../book-list';

const CatalogPage = () => {
  return (
    <>
      <section className='products'>
        <div className='container'>
          <div className='products__inner'>
            <div className='products__filter'>
              <div className='products__categories'>
                <h2>Categories</h2>
                <ul>
                  <li>
                    <a href='#'>Biographies</a>
                  </li>
                  <li>
                    <a href='#'>Business</a>
                  </li>
                  <li>
                    <a href='#'>Financial education</a>
                  </li>
                  <li>
                    <a href='#'>Literature</a>
                  </li>
                  <li>
                    <a href='#'>Personal development</a>
                  </li>
                  <li>
                    <a href='#'>Time management</a>
                  </li>
                </ul>
              </div>
              <div className='products__authors'>
                <h2>Authors</h2>
                <ul>
                  <li>
                    <a href='#'>Bodo Schaefer</a>
                  </li>
                  <li>
                    <a href='#'>Brian Tracy</a>
                  </li>
                  <li>
                    <a href='#'>Dale Carnegie</a>
                  </li>
                  <li>
                    <a href='#'>Hal Elrod</a>
                  </li>
                  <li>
                    <a href='#'>John Kehoe</a>
                  </li>
                  <li>
                    <a href='#'>Napoleon Hill</a>
                  </li>
                  <li>
                    <a href='#'>Robert Kiyosaki</a>
                  </li>
                  <li>
                    <a href='#'>Robin Sharma</a>
                  </li>
                  <li>
                    <a href='#'>Stephen Covey</a>
                  </li>
                  <li>
                    <a href='#'>Anthony Robbins</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='products__results'>
              <div className='products__settings'>
                <div className='products__sorting'>
                  <form method='get' action=''>
                    Sort by:
                    <select data-sort-items>
                      <option value='default' selected='true' disabled>
                        Default
                      </option>
                      <option value='a-z'>Name (A-Z)</option>
                      <option value='z-a'>Name (Z-A)</option>
                    </select>
                  </form>
                  <form method='get' action=''>
                    <select data-items-perpage>
                      <option value='6' selected='true'>
                        6
                      </option>
                      <option value='12'>12</option>
                    </select>
                  </form>
                </div>
                <div className='products__views'>
                  <div className='products__view products__view--active' data-view='grid'></div>
                  <div className='products__view' data-view='list'></div>
                </div>
              </div>
              <BookList />
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
