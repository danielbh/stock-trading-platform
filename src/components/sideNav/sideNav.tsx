import * as React from 'react';
import './index.css';

export class SideNav extends React.Component {
  render() {
    return (
      <nav id="sideNav" className="column column-20">
        <a href="#">Portfolio</a>
        <a href="#">Buy Stocks</a>
        <a href="#">Pending Orders</a>
        <a href="#">Settings</a>
      </nav>
    );
  }
}
