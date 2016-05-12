'use strict'

const GistDisplayPage = React.createClass({
  getInitialState: function () {
    return {
      gistListData: []
    };
  },
  loadDataFromGithub: function () {
    $.ajax({
      url: this.props.publicGistsUrl,
      dataType: 'json',
      cache: false,
      success: function (data) {
        // console.log('data: ', data);
        this.setState({gistListData: data})
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.publicGistsUrl, status, err.toString());
      }.bind(this)
    })
  },
  componentDidMount: function () {
    this.loadDataFromGithub();
  },
  render: function () {
    return (
      <div className='gistDisplayPage'>
        <h1>Gist Manager</h1>
        <GistList gistListData={this.state.gistListData} />
      </div>
    )
  } 
});

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
        {gistListNode}
      </div>
    )
  }
});

const GistItem = React.createClass({
  render: function () {
    return (
      <div className="gistItems">
        <h4>{this.props.description}</h4>
      </div>
    )
  }
})

ReactDOM.render(
  <GistDisplayPage 
    publicGistsUrl = 'https://api.github.com/gists/public' 
  />,
  document.getElementById('content')
);
    // publicGistsUrl = 'https://gist.githubusercontent.com/anonymous/9d780ae1aa46b3dc2ac73e01c06f1962/raw/6e6dd58b2885f2de439490746b268716a6d46ecd/config.json'