import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import AuthorQuotes from './pages/AuthorQuotes';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/:authorname" component={AuthorQuotes} />
    </BrowserRouter>
  );
}

export default Routes;