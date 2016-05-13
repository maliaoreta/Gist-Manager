const React = require('react');
const $ = require('jquery');
import { GistItem } from './GistItems';

export const GistList = React.createClass({
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