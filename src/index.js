import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';

import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {BrowserRouter,Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer';
import {userLoggedIn} from './actions/auth';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);


// if user token is present than dispath user logged in action

if(localStorage.bookworkJWT){
  const user = {
    token:localStorage.bookworkJWT
  };
  store.dispatch(userLoggedIn(user));
}


// createStore takes two args 1st is rootReducer its whole state object
// 2. Provider is high order Component from react redux in which we wrap or application and it takes store as props

ReactDOM.render(
<BrowserRouter>
  <Provider store={store}>
    <Route component={App} />
  </Provider>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
