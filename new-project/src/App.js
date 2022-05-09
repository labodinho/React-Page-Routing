import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class App extends Component {
  render() {
    return (
      <div>
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/About">About</Link></li>
          </ul>
          <hr />
        </div>

    )
  }
}

export default App