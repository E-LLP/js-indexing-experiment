import React from 'react';

class Component extends React.Component {
  render() {
    return (
      <div>React Component content</div>
    )
  }
}

React.render(<Component/>, document.getElementById('react-view'));
