import React, { Component } from 'react';
import Resource from './resource';
import './index.css';
import Worker from './worker';

export default class Resources extends Component {
  state = {
    Food: 0,
    Wood: 0,
    Stone: 0,
    worker: 0,
    interval: 1000,
  };
  eating = () => {
    if (this.state.worker > 0 && this.state.Food > 0) {
      this.setState({
        Food:
          this.state.Food - this.state.worker < 0
            ? 0
            : this.state.Food - this.state.worker,
      });
      this.setState({ interval: this.state.worker * 1000 });
    } else if (this.state.worker > 0 && this.state.Food === 0) {
      this.setState({ worker: this.state.worker - 1 });
    }
  };

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.eating();
    }, this.state.interval);
  }

  gatherFood = () => {
    if (this.state.Food < 200) {
      this.setState({ Food: +this.state.Food + 1 });
    }
  };
  gatherWood = () => {
    if (this.state.Wood < 200) {
      this.setState({ Wood: +this.state.Wood + 1 });
    }
  };
  gatherStone = () => {
    if (this.state.Stone < 200) {
      this.setState({ Stone: +this.state.Stone + 1 });
    }
  };

  createWorker = () => {
    if (this.state.Food > 20) {
      this.setState({ Food: +this.state.Food - 20 });
      this.setState({ worker: this.state.worker + 1 });
    }
  };

  render() {
    return (
      <div id="basicResources">
        <h3>Basic Resources</h3>
        <Resource
          name="Food"
          gather={this.gatherFood}
          count={this.state.Food}
        />
        <Resource
          name="Wood"
          gather={this.gatherWood}
          count={this.state.Wood}
        />
        <Resource
          name="Stone"
          gather={this.gatherStone}
          count={this.state.Stone}
        />
        <Worker
          createWorker={this.createWorker}
          workerCount={this.state.worker}
        />
      </div>
    );
  }
}
