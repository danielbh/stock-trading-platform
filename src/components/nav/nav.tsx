import * as React from 'react';
import './index.css';

export class Nav extends React.Component {
  render() {
    return (
      <nav id="sidenav" className="column column-20">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </nav>
    );
  }
}
