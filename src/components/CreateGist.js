const React = require('react');
import { CreateGistForm } from './CreateGistForm';

export const CreateGist = React.createClass({
  getInitialState: _ => {
    return {
      createGistForm: false,
      createGistButton: true
    }
  },
  handleClick: function() {
    this.setState({ createGistForm: true });
    this.setState({ createGistButton: false });
  },
  render: function() {
    const newGistButton = <button onClick={this.handleClick}>New Gist</button>

    return (
      <div className="createGist">
        {this.state.createGistForm ? <CreateGistForm /> : null}
        {this.state.createGistButton ? newGistButton : null}    
      </div>
    )
  }
});