/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, BrowserHistory } from 'react-router-dom';

import HomePage from 'containers/HomePage';
import DetailPage from 'containers/DetailPage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Helmet>
        <title>VF Crypto Challenge</title>
      </Helmet>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/coin/:id" component={DetailPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
