import React, { Component } from 'react';
import '../index.css';

export default class Worker extends Component {
  state = {};
  createWorker = () => {
    this.setState(JSON.parse(localStorage.getItem('game')));
    if (this.state.food > 20) {
      this.setState({ worker: this.state.worker ? this.state.worker + 1 : 1 });
      this.setState({ food: this.state.food - 20 });
      localStorage.setItem('game', JSON.stringify(this.state));
    }
  };
  render() {
    console.log(this.state);
    return (
      <div className="worker">
        <h2>Population </h2>
        <div>Current Population: {this.state.worker || 0}</div>
        <div>Maximum Population: </div>
        <button onClick={this.createWorker} className="gather">
          Create Worker
        </button>
      </div>
    );
  }
}
