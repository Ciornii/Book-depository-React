import React, { Component } from 'react';

export default class Filter extends Component {
  render() {
    return (
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
    );
  }
}
