import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'

import Layout from './components/layout';
import NotFoundPage from './pages/not-found';
import HomePage from './pages/home'

let history = createBrowserHistory()

const routes = (
  <Router history={history}>
    <Route path="/" component={Layout}>
      <IndexRoute component={HomePage} />
    </Route>
    <Route path="*" component={NotFoundPage} />
  </Router>
);

export default routes;
