import React, { Component } from 'react';
import '../index.css';

export default class Food extends Component {
  state = JSON.parse(localStorage.getItem('game'));
  gatherFood = () => {
    this.setState({ food: this.state.food ? this.state.food + 1 : 1 });
    localStorage.setItem('game', JSON.stringify(this.state));
  };
  render() {
    return (
      <div className="food">
        <button onClick={this.gatherFood} className="gather">
          Gather Food
        </button>
        <div>Food: {this.state.food || 0}</div>
      </div>
    );
  }
}
