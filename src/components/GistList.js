const React = require('react');
const $ = require('jquery');
import { GistItem } from './GistItems';

export const GistList = React.createClass({
  render: function () {
    let that = this;

    console.log('this.props.contentData: ', this.props.contentData);
    var gistListNode = this.props.gistListData.map(function (gist) {

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