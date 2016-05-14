const React = require('react');
const $ = require('jquery');
import { GistItem } from './GistItems';

export const GistList = React.createClass({
  render: function () {
    let that = this;
    var gistListNode = this.props.gistListData.map(function (gist) {
      return (
        <GistItem key={gist.id}
          id={gist.id}
          description={gist.description}
          deleteHandler={that.props.deleteHandler}
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