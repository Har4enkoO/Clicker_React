import React, { Component } from 'react';
import './index.css';
import Resources from './Resources';
import BasicResources from '../src/Basic_Resources/basicResources';
import Population from '../src/Population/worker.js';

export default class Game extends Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <a href="http://civclicker.sourceforge.net/civclicker/civFAQ.html">
              FAQ / Instructions / Bugfixing
            </a>
            <a href="http://civclicker.sourceforge.net/civclicker/civUpdates.html">
              Game Updates Log
            </a>
            <a href="http://localhost:3000/">Import/Export Save</a>
          </nav>
          <h1 id="universe">The Thorp of</h1>
          <p id="mighty">Ruled by the mighty</p>
        </header>
        <Resources />
        {/* <Population /> */}
      </>
    );
  }
}
