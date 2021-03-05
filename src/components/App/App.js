import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CartPage, CatalogPage } from '../pages';

import './app.scss';

const App = () => {
  return (
    <div className='container'>
      <Switch>
        <Route path='/' component={CatalogPage} exact />
        <Route path='/cart' component={CartPage} />
      </Switch>
    </div>
  );
};

export default App;
