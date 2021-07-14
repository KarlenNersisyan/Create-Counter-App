import React, { Component } from 'react';
import './input.css';

class Input extends Component {
  render() {
    return <input onChange={(e) => this.props.changed(e, this.props.type)} />;
  }
}

export default Input;
