const React = require('react');
const $ = require('jquery');
import { GistItem } from './GistItems';

export const GistList = React.createClass({
  render: function () {
    let that = this;

    var gistListNode = this.props.gistListData.map(function (gist) {
      // console.log('gist: ', gist);

      let fileNames = Object.keys(gist.files).join(', ');

      return (
        <GistItem key={gist.id}
          id={gist.id}
          description={gist.description}
          fileNames={fileNames}
          deleteHandler={that.props.deleteHandler}
        />
      )
    });
    return (
      <div>
        <h2>Your Gists</h2>
        {gistListNode}
      </div>
    )
  }
});