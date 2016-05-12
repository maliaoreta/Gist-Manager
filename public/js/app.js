'use strict'

var fakeGists = [
  {id: 1, name: 'Angular notes', body: 'yay angular blah blah'},
  {id: 2, name: 'React notes', body: 'yay eact blah blah'},
  {id: 3, name: 'JavaScript notes', body: 'yay JavaScript blah blah'},
  {id: 4, name: 'Java notes', body: 'yay java blah blah'}
]

const GistDisplayPage = React.createClass({
  render: function () {
    return (
      <div className='gistDisplayPage'>
        <h1>Gist Manager</h1>
        <GistList gists={this.props.fakeGists} />
      </div>
    )
  } 
});

const GistList = React.createClass({
  render: function () {
    var gistListNode = this.props.gists.map(function (gist) {
      return (
        <GistItem key={gist.id}
          name={gist.name}
          body={gist.body}
        />
      )
    });

    return (
      <div>
        {gistListNode}
      </div>
    )
  }
});

const GistItem = React.createClass({
  render: function () {
    return (
      <div className="gistItems">
        <h3>{this.props.name}</h3>
        <h4>{this.props.body}</h4>
      </div>
    )
  }
})

ReactDOM.render(
  <GistDisplayPage 
    fakeGists = {fakeGists}
  />,
  document.getElementById('content')
);