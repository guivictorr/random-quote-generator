import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Author from './pages/Author';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/:authorname" component={Author} />
    </BrowserRouter>
  );
}

export default Routes;