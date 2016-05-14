const React = require('react');
const $ = require('jquery');

export const CreateGistForm = React.createClass({
  getInitialState() {
    return {
      description: '',
      public: '',
      fileName: '',
      fileContent: ''
    };
  },
  handleDescription: function (event) {
    this.setState({description: event.target.value})
  },
  handlePublic: function (event) {
    this.setState({public: event.target.value})
  },
  handleFileName: function (event) {
    this.setState({fileName: event.target.value})
  },
  handleFileContent: function (event) {
    this.setState({fileContent: event.target.value})
  },
  handleSubmit: function (event) {
    event.preventDefault();

    const files = {};
    files[ this.state.fileName ] = {
          "content": this.state.fileContent
        }

    const data = {
      "description": this.state.description,
      "public": this.state.public,
      "files": files
    }

    this.setState({description: '', public: '', fileName: '', fileContent: ''});
    this.props.createdGist(data);
  },
  handleExit: function () {
    this.props.handleExit();
  },
  render: function () {
    return (
      <div className="createGistForm">
        <form onClick={this.handleSubmit}>
          <input name="description" placeholder="Description" value={this.state.description} onChange={this.handleDescription} /><br/>
          <input name="public" placeholder="Public: true or false" value={this.state.public} onChange={this.handlePublic} /><br/>
          <input name="fileName" placeholder="File Name" value={this.state.fileName} onChange={this.handleFileName} /><br/>
          <input name="fileContent" placeholder="File Content" value={this.state.fileContent} onChange={this.handleFileContent} /><br/>
          <button type="submit">Submit</button>
        </form>
        <button onClick={this.handleExit}>Exit</button>
      </div>
    )
  } 
}); 