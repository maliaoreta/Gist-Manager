import { react } from 'react';
const GistList = require('./GistList');
const $ = require('jquery');

export const GistDisplayPage = React.createClass({
  getInitialState: function () {
    return {
      gistListData: []
    };
  },
  loadDataFromGithub: function () {
    $.ajax({
      url: this.props.gistsUrl,
      dataType: 'json',
      cache: false,
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'token ' + this.props.accessToken);
      }.bind(this),
      success: function (data) {
        this.setState({gistListData: data})
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.gistsUrl, status, err.toString());
      }.bind(this)
    })
  },
  componentDidMount: function () {
    this.loadDataFromGithub();
  },
  render: function () {
    return (
      <div className='gistDisplayPage'>
        <button><a href="/logout">Logout</a></button>
        <h1>Gist Manager</h1>
        <GistList gistListData={this.state.gistListData} />
      </div>
    )
  } 
});