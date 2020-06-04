import React, { Component } from 'react';
import './index.css';

export default class Resource extends Component {
  render() {
    return (
      <div className="resources">
        <button
          onClick={this.props.gather}
          className="gather"
        >
          Gather {this.props.name}
        </button>
        <div>{this.props.name}: {this.props.count}</div>
      </div>
    );
  }
}
