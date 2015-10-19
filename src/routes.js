import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import Layout from './components/layout';
import NotFound from './pages/not-found';

import Home from './pages/home'

const routes = (
  <Router>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);

export default routes;
