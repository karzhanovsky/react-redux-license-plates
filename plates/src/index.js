import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path='/' component={App}>
          <App />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
