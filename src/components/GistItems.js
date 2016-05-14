const React = require('react');
const $ = require('jquery');

export const GistItem = React.createClass({
  deleteHandler: function () {
    this.props.deleteHandler(this.props.id);
  },
  render: function () {
    return (
      <div className="gistItems">
        <h4>Description: {this.props.description}</h4>
        <button onClick={this.deleteHandler}>Delete</button>
      </div>
    )
  }
});