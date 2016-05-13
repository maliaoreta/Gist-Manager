const react = require('react');
import { GistDisplayPage } from './components/GistDisplayPage';
import { Dashboard } from './components/Dashboard';
const querystring = require('qs');
// import qs, * as querystring from 'qs';
// const Router = ReactRouter.Router;
// const Route = ReactRouter.Route;
// const Link = ReactRouter.Link;
// const IndexRoute = ReactRouter.IndexRoute;
// const BrowserHistory = ReactRouter.browserHistory;

const { parsedAccessToken, parsedUsername } = querystring.parse(window.location.search.substring(1));

if (parsedAccessToken) {
  localStorage.setItem('accessToken', accessToken);
}
if (parsedUsername) {
  localStorage.setItem('username', username);
}

const username = localStorage.getItem('username');
const usersGistsUrl = `https://api.github.com/users/${username}/gists`;

if (localStorage.length > 0) {
  ReactDOM.render(
    <GistDisplayPage
      accessToken = {localStorage.getItem('accessToken')}
      gistsUrl = {usersGistsUrl}
    />
    ,document.getElementById('content')
  );
}
else {
  ReactDOM.render(
    <Dashboard/>,
    document.getElementById('content')
  );
}