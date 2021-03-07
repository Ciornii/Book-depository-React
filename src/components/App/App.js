import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MyListPage, CatalogPage } from '../pages';

import './app.scss';

const App = () => {
  return (
    <div className='container'>
      <Switch>
        <Route path='/' component={CatalogPage} exact />
        <Route path='/my-list' component={MyListPage} />
      </Switch>
    </div>
  );
};

export default App;
