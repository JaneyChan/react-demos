import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import Immutable from 'immutable';
import reducer from './reducers';
import Header from './components/Header';
// import Index from './routes/Index';
import Content from './components/Content';
import UserDetail from './components/UserDetail';

const body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = '#f2f3f5';


const middleware = [thunk];
const initialState = Immutable.Map();

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger({ stateTransformer: state => state.toJS() }));
}

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware),
);

render(
  (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={Header}>
          <IndexRoute component={Content} />
          <Route path="good" component={Content} />
          <Route path="share" component={Content} />
          <Route path="ask" component={Content} />
          <Route path="job" component={Content} />
          <Route path="userDetail" component={UserDetail} />
        </Route>
      </Router>
    </Provider>
  ), document.getElementById('content'),
);
