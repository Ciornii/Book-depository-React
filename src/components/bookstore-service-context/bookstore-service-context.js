import React, { Component } from 'react';

const {
   Provider: BookstoreServiceProvider,
   Consumer: BookstoreServiceConsumer,
} = React.createContext();

export { BookstoreServiceProvider, BookstoreServiceConsumer };
