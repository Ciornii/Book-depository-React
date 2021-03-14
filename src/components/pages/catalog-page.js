import React from 'react';
import BookList from '../book-list';
import MyListPage from './my-list-page';

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
                      <option value='default' defaultValue disabled>
                        Default
                      </option>
                      <option value='a-z'>Name (A-Z)</option>
                      <option value='z-a'>Name (Z-A)</option>
                    </select>
                  </form>
                  <form method='get' action=''>
                    <select data-items-perpage>
                      <option value='6' defaultValue>
                        6
                      </option>
                      <option value='12'>12</option>
                    </select>
                  </form>
                </div>
                <div className='products__views'>
                  <div className='products__view products__view--active'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 276.167 276.167'>
                      <g>
                        <path
                          d='M33.144,2.471C15.336,2.471,0.85,16.958,0.85,34.765s14.48,32.293,32.294,32.293s32.294-14.486,32.294-32.293
			S50.951,2.471,33.144,2.471z'
                        />
                        <path
                          d='M137.663,2.471c-17.807,0-32.294,14.487-32.294,32.294s14.487,32.293,32.294,32.293c17.808,0,32.297-14.486,32.297-32.293
			S155.477,2.471,137.663,2.471z'
                        />
                        <path
                          d='M243.873,67.059c17.804,0,32.294-14.486,32.294-32.293S261.689,2.471,243.873,2.471s-32.294,14.487-32.294,32.294
			S226.068,67.059,243.873,67.059z'
                        />
                        <path
                          d='M32.3,170.539c17.807,0,32.297-14.483,32.297-32.293c0-17.811-14.49-32.297-32.297-32.297S0,120.436,0,138.246
			C0,156.056,14.493,170.539,32.3,170.539z'
                        />
                        <path
                          d='M136.819,170.539c17.804,0,32.294-14.483,32.294-32.293c0-17.811-14.478-32.297-32.294-32.297
			c-17.813,0-32.294,14.486-32.294,32.297C104.525,156.056,119.012,170.539,136.819,170.539z'
                        />
                        <path
                          d='M243.038,170.539c17.811,0,32.294-14.483,32.294-32.293c0-17.811-14.483-32.297-32.294-32.297
			s-32.306,14.486-32.306,32.297C210.732,156.056,225.222,170.539,243.038,170.539z'
                        />
                        <path
                          d='M33.039,209.108c-17.807,0-32.3,14.483-32.3,32.294c0,17.804,14.493,32.293,32.3,32.293s32.293-14.482,32.293-32.293
			S50.846,209.108,33.039,209.108z'
                        />
                        <path
                          d='M137.564,209.108c-17.808,0-32.3,14.483-32.3,32.294c0,17.804,14.487,32.293,32.3,32.293
			c17.804,0,32.293-14.482,32.293-32.293S155.368,209.108,137.564,209.108z'
                        />
                        <path
                          d='M243.771,209.108c-17.804,0-32.294,14.483-32.294,32.294c0,17.804,14.49,32.293,32.294,32.293
			c17.811,0,32.294-14.482,32.294-32.293S261.575,209.108,243.771,209.108z'
                        />
                      </g>
                    </svg>
                  </div>
                  <div className='products__view'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 612 612'>
                      <path
                        d='M63.311,73.862C28.342,73.862,0,102.204,0,137.172s28.342,63.311,63.311,63.311c34.968,0,63.31-28.342,63.31-63.311
				S98.279,73.862,63.311,73.862z M63.311,242.689C28.342,242.689,0,271.032,0,306c0,34.969,28.342,63.311,63.311,63.311
				c34.968,0,63.31-28.342,63.31-63.311C126.621,271.032,98.279,242.689,63.311,242.689z M63.311,411.518
				C28.342,411.518,0,439.859,0,474.827c0,34.969,28.342,63.311,63.311,63.311c34.968,0,63.31-28.342,63.31-63.311
				C126.621,439.859,98.279,411.518,63.311,411.518z M232.138,179.379h337.655c23.319,0,42.207-18.888,42.207-42.207
				s-18.888-42.207-42.207-42.207H232.138c-23.319,0-42.207,18.888-42.207,42.207S208.819,179.379,232.138,179.379z
				 M569.793,263.793H232.138c-23.319,0-42.207,18.888-42.207,42.207s18.888,42.207,42.207,42.207h337.655
				C593.112,348.207,612,329.319,612,306S593.112,263.793,569.793,263.793z M569.793,432.621H232.138
				c-23.319,0-42.207,18.887-42.207,42.206s18.888,42.207,42.207,42.207h337.655c23.319,0,42.207-18.888,42.207-42.207
				S593.112,432.621,569.793,432.621z'
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <BookList />
              <button className='btn load-more' id='loadMore'>
                Load more
              </button>
              <MyListPage />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CatalogPage;
