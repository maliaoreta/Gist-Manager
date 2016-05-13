const GistItem = React.createClass({
  render: function () {
    return (
      <div className="gistItems">
        <h4>Description: {this.props.description}</h4>
      </div>
    )
  }
})


module.exports = GistItem;