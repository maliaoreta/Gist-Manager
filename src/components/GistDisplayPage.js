const React = require('react');
import { GistList } from './GistList';
import { Logout } from './Logout';
import { CreateGist } from './CreateGist';
const $ = require('jquery');
const querystring = require('qs');
import { Router, Route, IndexRoute, browserHistory as BrowserHistory} from 'react-router';

const { accessToken, username } = querystring.parse(window.location.search.substring(1));

if (accessToken) {
  localStorage.setItem('accessToken', accessToken);
}
if (username) {
  localStorage.setItem('username', username);
  window.location = '/';
}

const userAccessToken = localStorage.getItem('accessToken');
const gistUsername = localStorage.getItem('username');
const usersGistsUrl = `https://api.github.com/users/${gistUsername}/gists`;

export const GistDisplayPage = React.createClass({
  getInitialState: function () {
    return {
      gistListData: []
    };
  },
  loadDataFromGithub: function () {
    $.ajax({
      url: usersGistsUrl,
      dataType: 'json',
      cache: false,
      headers: {
        Authorization: 'token ' + userAccessToken
      },
      method: 'GET',
      success: function (data) {
        this.setState({gistListData: data})
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.gistsUrl, status, err.toString());
      }.bind(this)
    })
  },
  deleteHandler: function (gistID) {
    $.ajax({
      method: 'DELETE',
      url: `https://api.github.com/gists/${gistID}`,
      cache: false,
      headers: {
        'Authorization': `token ${localStorage.getItem('accessToken')}`
      },
      success: function () {
        console.log('Success!');
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(status, err.toString());
      }.bind(this)
    })
  },
  componentDidMount: function () {
    this.loadDataFromGithub();
  },
  render: function () {
    return (
      <div className='gistDisplayPage'>
        <h1>Gist Manager</h1>
        <Logout />
        <CreateGist />
        <GistList gistListData={this.state.gistListData} deleteHandler={this.deleteHandler} />
      </div>
    )
  } 
});
