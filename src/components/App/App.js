import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MyListPage, CatalogPage } from '../pages';
import Header from '../layouts/header';
import Quotes from '../layouts/quotes';
import Footer from '../layouts/footer';

import './app.scss';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/' component={CatalogPage} exact />
        <Route path='/my-list' component={MyListPage} />
      </Switch>
      <Quotes />
      <Footer />
    </>
  );
};

export default App;
