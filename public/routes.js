import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Dashboard from './src/containers/dashboard';
import App from './src/components/app';
import Welcome from './src/components/welcome';
import LoginPage from './src/containers/login_page';
import SignupPage from './src/containers/signup_page';
import CreateSavingGroupPage from './src/components/create_saving_group_page';
import requireAuth from './src/utils/require_auth';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Welcome} />
    <Route path="/dashboard" component={requireAuth(Dashboard)} />
    <Route path="/login" component={LoginPage} />
    <Route path="/signup" component={SignupPage} />
    <Route path="/create-saving-group" component={requireAuth(CreateSavingGroupPage)} />
  </Route>
);
