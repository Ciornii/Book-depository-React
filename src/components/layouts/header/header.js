import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import DropdownList from '../../dropdown-list';

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

const Header = ({ myListItems, wishListItems }) => {
  const [myListDropdown, setMyListDropdown] = useState(false);
  const [wishListDropdown, setWishListDropdown] = useState(false);

  const myListRef = useRef();
  const wishListRef = useRef();

  useClickOutside(() => {
    setMyListDropdown(false);
  }, myListRef);

  useClickOutside(() => {
    setWishListDropdown(false);
  }, wishListRef);

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
              />
              <div className='navbar__icon'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56.966 56.966'>
                  <path d='M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17s-17-7.626-17-17S14.61,6,23.984,6z' />
                </svg>
              </div>
            </div>
            <div className='navbar__btns'>
              <button className='navbar__btn navbar__btn--user'>
                <svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
                  <path d='m437.019531 74.980469c-48.351562-48.351563-112.640625-74.980469-181.019531-74.980469-68.382812 0-132.667969 26.628906-181.019531 74.980469-48.351563 48.351562-74.980469 112.636719-74.980469 181.019531 0 68.378906 26.628906 132.667969 74.980469 181.019531 48.351562 48.351563 112.636719 74.980469 181.019531 74.980469 68.378906 0 132.667969-26.628906 181.019531-74.980469 48.351563-48.351562 74.980469-112.640625 74.980469-181.019531 0-68.382812-26.628906-132.667969-74.980469-181.019531zm-308.679687 367.40625c10.707031-61.648438 64.128906-107.121094 127.660156-107.121094 63.535156 0 116.953125 45.472656 127.660156 107.121094-36.347656 24.972656-80.324218 39.613281-127.660156 39.613281s-91.3125-14.640625-127.660156-39.613281zm46.261718-218.519531c0-44.886719 36.515626-81.398438 81.398438-81.398438s81.398438 36.515625 81.398438 81.398438c0 44.882812-36.515626 81.398437-81.398438 81.398437s-81.398438-36.515625-81.398438-81.398437zm235.042969 197.710937c-8.074219-28.699219-24.109375-54.738281-46.585937-75.078125-13.789063-12.480469-29.484375-22.328125-46.359375-29.269531 30.5-19.894531 50.703125-54.3125 50.703125-93.363281 0-61.425782-49.976563-111.398438-111.402344-111.398438s-111.398438 49.972656-111.398438 111.398438c0 39.050781 20.203126 73.46875 50.699219 93.363281-16.871093 6.941406-32.570312 16.785156-46.359375 29.265625-22.472656 20.339844-38.511718 46.378906-46.585937 75.078125-44.472657-41.300781-72.355469-100.238281-72.355469-165.574219 0-124.617188 101.382812-226 226-226s226 101.382812 226 226c0 65.339844-27.882812 124.277344-72.355469 165.578125zm0 0' />
                </svg>
              </button>
              <div ref={myListRef}>
                <button
                  className='navbar__btn navbar__btn--my-books'
                  onClick={() => setMyListDropdown(!myListDropdown)}
                >
                  <svg
                    enableBackground='new 0 0 24 24'
                    height='512'
                    viewBox='0 0 24 24'
                    width='512'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='m21.25 24h-17.5c-1.517 0-2.75-1.233-2.75-2.75v-18.5c0-1.517 1.233-2.75 2.75-2.75h15.5c.414 0 .75.336.75.75v3.25h1.25c.414 0 .75.336.75.75v18.5c0 .414-.336.75-.75.75zm-18.75-18.801v16.051c0 .689.561 1.25 1.25 1.25h16.75v-17h-16.75c-.45 0-.875-.108-1.25-.301zm1.25-3.699c-.689 0-1.25.561-1.25 1.25s.561 1.25 1.25 1.25h14.75v-2.5z' />
                    <path d='m12.25 19c-.137 0-.272-.037-.394-.111l-2.856-1.758-2.856 1.758c-.232.143-.521.148-.76.016-.238-.133-.384-.384-.384-.655v-13.5h1.5v12.158l2.106-1.296c.242-.148.545-.148.787 0l2.106 1.296v-12.158h1.501v13.5c0 .271-.146.522-.384.655-.114.063-.24.095-.366.095z' />
                  </svg>
                  <div className='navbar__counter'>{myListItems.length}</div>
                </button>
                <DropdownList
                  active={myListDropdown}
                  title='MY BOOKS'
                  close={setMyListDropdown}
                  link='/my-list'
                />
              </div>
              <div ref={wishListRef}>
                <button
                  className='navbar__btn navbar__btn--wishlist'
                  onClick={() => setWishListDropdown(!wishListDropdown)}
                >
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 477.534 477.534'>
                    <path d='M438.482,58.61c-24.7-26.549-59.311-41.655-95.573-41.711c-36.291,0.042-70.938,15.14-95.676,41.694l-8.431,8.909l-8.431-8.909C181.284,5.762,98.662,2.728,45.832,51.815c-2.341,2.176-4.602,4.436-6.778,6.778c-52.072,56.166-52.072,142.968,0,199.134l187.358,197.581c6.482,6.843,17.284,7.136,24.127,0.654c0.224-0.212,0.442-0.43,0.654-0.654l187.29-197.581C490.551,201.567,490.551,114.77,438.482,58.61z M413.787,234.226h-0.017L238.802,418.768L63.818,234.226c-39.78-42.916-39.78-109.233,0-152.149c36.125-39.154,97.152-41.609,136.306-5.484c1.901,1.754,3.73,3.583,5.484,5.484l20.804,21.948c6.856,6.812,17.925,6.812,24.781,0l20.804-21.931c36.125-39.154,97.152-41.609,136.306-5.484c1.901,1.754,3.73,3.583,5.484,5.484C453.913,125.078,454.207,191.516,413.787,234.226z' />
                  </svg>
                  <div className='navbar__counter'>{wishListItems.length}</div>
                </button>
                <DropdownList
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

const mapStateToProps = ({ myListItems: { myListItems }, wishListItems: { wishListItems } }) => {
  return {
    myListItems: myListItems,
    wishListItems: wishListItems,
  };
};

export default connect(mapStateToProps)(Header);
