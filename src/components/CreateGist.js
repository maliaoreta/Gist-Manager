const React = require('react');
import { CreateGistForm } from './CreateGistForm';

export const CreateGist = React.createClass({
  getInitialState: _ => {
    return {
      createGistForm: false,
      createGistButton: true,
    }
  },
  handleClick: function() {
    this.setState({ createGistForm: true });
    this.setState({ createGistButton: false });
  },
  handleExit: function () {
    this.setState({ createGistForm: false });
    this.setState({ createGistButton: true });
  },
  render: function() {
    const newGistButton = <button onClick={this.handleClick}>New Gist</button>

    return (
      <div className="createGist">
        {this.state.createGistForm ? <CreateGistForm createdGist={this.props.createdGist} handleExit={this.handleExit} /> : null}
        {this.state.createGistButton ? newGistButton : null}
      </div>
    )
  }
});