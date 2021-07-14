import React, { Component } from 'react';
import './button.css';

class Button extends Component {
  render() {
    return (
      <p onClick={() => this.props.clicked(this.props.type)}>
        {this.props.type}
      </p>
    );
  }
}

export default Button;
