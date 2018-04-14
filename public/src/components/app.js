import React, { Component } from 'react';
import NavigationBar from '../containers/navigation_bar';
import FlashMessagesList from '../containers/flash_messages_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <NavigationBar />
        <FlashMessagesList />
        {this.props.children}
      </div>
    );
  }
}

export default App;