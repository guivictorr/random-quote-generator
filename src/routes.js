import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import AuthorQuotes from './pages/AuthorQuotes';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/authorquotes/:authorname" component={AuthorQuotes} />
    </Switch>
  );
}

export default Routes;