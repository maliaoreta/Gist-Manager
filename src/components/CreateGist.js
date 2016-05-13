const React = require('react');

export const CreateGist = React.createClass({
  handleClick: _ => {

  },
  render: _ => {
    return (
      <div className="createGist"> 
        <button onClick={this.handleClick}><a href="/create">New Gist</a></button>
      </div>
    )
  }
});