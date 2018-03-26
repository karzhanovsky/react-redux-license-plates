import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <div>
      <Switch>
        <Route path='/' component={App}>
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
