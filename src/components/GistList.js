const react = require('react');
const $ = require('jquery');
const GistItem = require('./GistItems');

const GistList = React.createClass({
  render: function () {
    var gistListNode = this.props.gistListData.map(function (gist) {
      return (
        <GistItem key={gist.id}
          description={gist.description}
        />
      )
    });

    return (
      <div>
        <h3>Your Gists</h3>
        {gistListNode}
      </div>
    )
  }
});

module.exports = GistList;