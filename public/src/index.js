import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { Router, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import jwt from 'jsonwebtoken';
import routes from '../routes';
import reducers from './reducers';
import setAuthorizationToken from './utils/authorization_token';
import { setCurrentUser } from './actions/auth';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk, ReduxPromise),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)))
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container-fluid')
);
