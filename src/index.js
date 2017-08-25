import './styles.css';
import React from 'react';
import { render } from 'react-dom';
import App from './containers/App/App.js';
import { Provider } from 'react-redux';
import { userConnect } from './actions'
import textReducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UserLogin from './containers/usernamePage/index.js';
import UserList from './containers/userList/index.js';

const store = createStore(
  textReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(ReduxThunk)
);

render(
  <Provider store={store}>
  <Router>
        <div>
          <Route exact path="/" component={UserLogin}/>
          <Route path="/userlist" component={UserList}/>
        </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)

