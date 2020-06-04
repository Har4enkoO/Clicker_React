import React, { Component } from 'react';
import '../index.css';

export default class Stone extends Component {
  state = {};
  gatherStone = () => {
    this.setState(JSON.parse(localStorage.getItem('game')));
    this.setState({ stone: this.state.stone ? this.state.stone + 1 : 1 });
    localStorage.setItem('game', JSON.stringify(this.state));
  };
  render() {
    return (
      <div className="stone">
        <button onClick={this.gatherStone} className="gather">
          Gather Stone
        </button>
        <div>Stone: {this.state.stone || 0}</div>
      </div>
    );
  }
}
