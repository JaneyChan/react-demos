import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import Immutable from 'immutable';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import reducer from './reducers';
import Header from './components/Header';
import Index from './routes/Index';


const body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = '#f2f3f5';

// 支持移动端触摸事件
injectTapEventPlugin();

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
      <MuiThemeProvider>
        <Router history={hashHistory}>
          <Route path="/" component={Header}>
            <IndexRoute component={Index} />
            <Route path="good" component={Index} />
            <Route path="share" component={Index} />
            <Route path="ask" component={Index} />
            <Route path="job" component={Index} />
          </Route>
        </Router>
      </MuiThemeProvider>
    </Provider>
  ), document.getElementById('content'),
);