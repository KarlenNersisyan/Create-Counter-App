import React, { Component } from 'react';
import './button.css';

class Button extends Component {
  render() {
    const icon =
      this.props.type === 'plus' ? (
        <i className="far fa-plus-circle"></i>
      ) : (
        <i className="far fa-minus-circle"></i>
      );
    return <button className="borderName" onClick={() => this.props.clicked(this.props.type)}>{icon}</button>;
  }
}

export default Button;
