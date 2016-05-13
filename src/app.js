'use strict'

const react = require('react');
const GistDisplayPage = require('./components/GistDisplayPage');
const GistList = require('./components/GistList');
const GistItem = require('./components/GistItems');

ReactDOM.render(
  <GistDisplayPage 
    gistsUrl = 'https://api.github.com/gists' 
  />,
  document.getElementById('content')
)