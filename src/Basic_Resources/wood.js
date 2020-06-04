import React, { Component } from 'react';
import '../index.css';

export default class Food extends Component {
  state = {};
  gatherWood = () => {
    this.setState(JSON.parse(localStorage.getItem('game')));
    this.setState({ wood: this.state.wood ? this.state.wood + 1 : 1 });
    localStorage.setItem('game', JSON.stringify(this.state));
  };
  render() {
    return (
      <div className="wood">
        <button onClick={this.gatherWood} className="gather">
          Gather Wood
        </button>
        <div>Wood: {this.state.wood || 0}</div>
      </div>
    );
  }
}
