const React = require('react');

export const Dashboard = React.createClass({
  render: function () {
    return (
      <div className="dashboard">
        <h1>Gist Manager</h1>
        <button><a href="/auth/github">Login</a></button> 
      </div>
    );
  }
});
