import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Dashboard from './src/containers/dashboard';
import App from './src/components/app';
import Welcome from './src/components/welcome';
import LoginPage from './src/containers/login_page';
import SignupPage from './src/containers/signup_page';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Welcome} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/login" component={LoginPage} />
    <Route path="/signup" component={SignupPage} />
  </Route>
);
