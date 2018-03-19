import * as React from 'react';
import './App.css';
import { SideNav, SearchFeed, Content } from './components';

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <div className="row">
          <SideNav />
          <SearchFeed />
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
