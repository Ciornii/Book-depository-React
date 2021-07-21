import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { lowerCaseTrim } from '../../../utils';

import MyListDropdown from '../../dropdown-list/my-list-dropdown';
import WishListDropdown from '../../dropdown-list/wish-list-dropdown';
import Svg from '../../svg';

const useClickOutside = (handler, domNode) => {
  useEffect(() => {
    let maybeHandler = event => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener('mousedown', maybeHandler);

    return () => {
      document.removeEventListener('mousedown', maybeHandler);
    };
  });
};

const Header = ({ myListItems, wishListItems, books }) => {
  const [myListDropdown, setMyListDropdown] = useState(false);
  const [wishListDropdown, setWishListDropdown] = useState(false);
  const [search, setSearch] = useState('');
  const [autocomplete, setAutocomplete] = useState([]);

  const myListRef = useRef();
  const wishListRef = useRef();

  useClickOutside(() => {
    setMyListDropdown(false);
  }, myListRef);

  useClickOutside(() => {
    setWishListDropdown(false);
  }, wishListRef);

  useEffect(() => {
    if (search && search !== '') {
      setAutocomplete(books.filter(item =>
        lowerCaseTrim(item.title).includes(search) || lowerCaseTrim(item.author).includes(search)
      ))
    } else {
      setAutocomplete([]);
    }
  }, [search])


  return (
    <header className='header-global' id='up'>
      <nav className='navbar'>
        <div className='container'>
          <div className='navbar__inner'>
            <div className='navbar__logo'>
              <a href='/'>
                <img src='./assets/img/logo/logo-white.png' alt='logo' />
              </a>
            </div>
            <div className='navbar__search'>
              <input
                type='text'
                name='searchBar'
                id='searchBar'
                placeholder='Search a book...'
                autoComplete='off'
                onChange={(e) => setSearch(lowerCaseTrim(e.target.value))}
              />
              <div className='navbar__icon'>
                <Svg name='navbar-icon' />
              </div>
              <div
                className={`autocomplete ${autocomplete.length > 0 ? 'active' : ''}`}>
                <ul>
                  {autocomplete.map((book, idx) => {
                    return (
                      <li key={idx}>
                        <Link to={`/${book.id}`} onClick={() => setSearch('')}>
                          {book.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className='navbar__btns'>
              <button className='navbar__btn navbar__btn--user'>
                <Svg name='user' />
              </button>
              <div ref={myListRef}>
                <button
                  className='navbar__btn navbar__btn--my-books'
                  onClick={() => setMyListDropdown(!myListDropdown)}
                >
                  <Svg name='my-books-empty' />
                  <div className='navbar__counter'>{myListItems.length}</div>
                </button>
                <MyListDropdown
                  active={myListDropdown}
                  title='MY BOOKS'
                  close={setMyListDropdown}
                  link='/my-list'
                  className='popup-list--my-list'
                />
              </div>
              <div ref={wishListRef}>
                <button
                  className='navbar__btn navbar__btn--wishlist'
                  onClick={() => setWishListDropdown(!wishListDropdown)}
                >
                  <Svg name='wishlist-empty' />
                  <div className='navbar__counter'>{wishListItems.length}</div>
                </button>
                <WishListDropdown
                  active={wishListDropdown}
                  title='WISH LIST'
                  close={setWishListDropdown}
                  link='/wish-list'
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = ({ bookList: { books }, myListItems: { myListItems }, wishListItems: { wishListItems } }) => {
  return {
    books,
    myListItems,
    wishListItems
  };
};

export default connect(mapStateToProps)(Header);
