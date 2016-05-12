'use strict'

const GistDisplayPage = React.createClass({
  render: function () {
    return (
      <div className='gistDisplayPage'>
        <h1>Gist Manager</h1>
      </div>
    )
  } 
});

ReactDOM.render(
  <GistDisplayPage />,
  document.getElementById('content')
);