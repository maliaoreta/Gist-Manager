const react = require('react');
const GistDisplayPage = require('./components/GistDisplayPage');
// const Dashboard = require('./components/Dashboard');
import { Dashboard } from './components/Dashboard';
const querystring = require('qs');
// const Router = ReactRouter.Router;
// const Route = ReactRouter.Route;
// const Link = ReactRouter.Link;
// const IndexRoute = ReactRouter.IndexRoute;
// const BrowserHistory = ReactRouter.browserHistory;

function getUrlValues() {
  var parsedURL = querystring.parse(window.location.search.substring(1));
  var accessToken = parsedURL.accessToken;
  var username = parsedURL.username;

  return {
    accessToken: accessToken,
    username: username
  }
}

var accessToken = getUrlValues().accessToken;
var username = getUrlValues().username;

console.log('getUrlValues(): ', getUrlValues());
var url = 'https://api.github.com/users/' + username + '/gists';

if (accessToken) {
  localStorage.setItem('accessToken', accessToken);
  // window.location.href = '/'; 
}

if (localStorage.length > 0) { 
  ReactDOM.render(
    <GistDisplayPage
      accessToken = {accessToken}
      gistsUrl = {url}
    />
    ,document.getElementById('content')
  )
}
else {
  ReactDOM.render(
    <Dashboard/>,
    document.getElementById('content')
  )
}

