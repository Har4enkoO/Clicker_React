import React, { Component } from 'react';
import Food from './food';
import Wood from './wood';
import Stone from './stone';

export default class BasicResources extends Component {
  render() {
    return (
      <>
        <h2>Basic Resources</h2>
        <Food />
        <Wood />
        <Stone />
      </>
    );
  }
}
