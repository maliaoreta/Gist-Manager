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
      gistListData: [],
      contentData: []
    };
  },
  loadDataFromGithub: function () {
    this.helper().then((data) => {
      data.forEach((gist) => {
        this.loadGistContent(gist.url)
        .then((data) => {
          console.log('data: ', data);
        })
      })
    })
  },
  helper: function () {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: usersGistsUrl,
        dataType: 'json',
        cache: false,
        headers: {
          'Authorization': `token ${userAccessToken}`
        },
        method: 'GET',
        success: function (data) {     
          resolve(data);
        },
        error: function (xhr, status, err) {
          reject(err);
        }
      })
    })
  },
  loadGistContent: function (gistContentUrl) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: gistContentUrl,
        dataType: 'json',
        cache: false,
        headers: {
          'Authorization': `token ${userAccessToken}`
        },
        method: 'GET',
        success: function (data) {
          resolve(data);
        },
        error: function (xhr, status, err) {
          reject(err);
        }
      })
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
        this.loadDataFromGithub();
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(status, err.toString());
      }.bind(this)
    })
  },
  createdGist: function (data) {
    $.ajax({
      method: 'POST',
      url: 'https://api.github.com/gists',
      dataType: 'json',
      cache: false,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'token ' + localStorage.getItem('accessToken')
      },
      data: JSON.stringify(data),
      success: function (data) {
        this.loadDataFromGithub();
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(xhr, status, err.toString());
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
        <CreateGist createdGist={this.createdGist} />
        <GistList gistListData={this.state.gistListData} contentData={this.state.contentData} deleteHandler={this.deleteHandler} />
      </div>
    )
  } 
});
