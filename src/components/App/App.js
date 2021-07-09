import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CatalogPage, MyListPage, WishListPage, SinglePage } from '../pages';
import Header from '../layouts/header';
import Quotes from '../layouts/quotes';
import Footer from '../layouts/footer';

import './app.scss';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path='/' component={CatalogPage} exact />
          <Route path='/my-list' component={MyListPage} />
          <Route path='/wish-list' component={WishListPage} />
          <Route path='/:id' children={<SinglePage />} />
        </Switch>
        <Quotes />
      </main>
      <Footer />
    </>
  );
};

export default App;
