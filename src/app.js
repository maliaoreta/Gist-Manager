const React = require('react');
const ReactDOM = require('react-dom');
import { GistDisplayPage } from './components/GistDisplayPage';
import { Dashboard } from './components/Dashboard';
import { Router, Route, browserHistory as BrowserHistory} from 'react-router';
// import qs, * as querystring from 'qs';

if (localStorage.length > 0) {
  ReactDOM.render(
    (
      <Router history={BrowserHistory}>
        <Route path='/' component={GistDisplayPage}>
        </Route>
      </Router>
    )
    ,document.getElementById('content')
  );
}
else {
  ReactDOM.render(
    (
      <Router history={BrowserHistory}>
        <Route path='/' component={Dashboard}>
        </Route>
      </Router>
    )
    ,document.getElementById('content')
  );
}