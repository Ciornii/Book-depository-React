import React from 'react';
import './app.scss';
import { withBookstoreService } from '../hoc';

const App = ({ bookstoreService }) => {
  console.log(bookstoreService.getBooks());
  return (
    <div className='container'>
      <h1>App</h1>
    </div>
  );
};

export default withBookstoreService()(App);
