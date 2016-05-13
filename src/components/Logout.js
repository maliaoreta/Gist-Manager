const React = require('react');

export const Logout = React.createClass({
  handleClick: function () {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('username');
    window.location.href = '/';
  },
  render: function () {
    return (
      <div className="Logout">
        <button onClick={this.handleClick}><a href="/logout">Logout</a></button>
      </div>
    )
  }
})