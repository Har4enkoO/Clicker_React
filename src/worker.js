import React, { Component } from 'react';

export default class Worker extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.createWorker();
          }}
          className="gather"
        >
          Create Worker
        </button>
        <div>Workers: {this.props.workerCount}</div>
      </div>
    );
  }
}
