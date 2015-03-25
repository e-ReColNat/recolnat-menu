'use strict';

import App from './App';
import React from 'react';
import Router from 'react-router';
var {DefaultRoute, Route, Routes} = Router;

import rootRoute from './root-route';
var routes = (
  <Route name="app" path={rootRoute} handler={App}>
    <DefaultRoute name="home" handler={App} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler/>, document.body);
});