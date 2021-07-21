import React, { Component } from 'react';
import '../Counter/Counter.css';
import Button from '../Button/Button.jsx';
import Input from '../Input/Input.jsx';
import { plusMinusHandler } from '../../helpers/incrementAndDecrement.js';

const data = localStorage.getItem('value');
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: localStorage.getItem('value')
        ? Number(localStorage.getItem('value'))
        : 0,
      step: localStorage.getItem('step')
        ? Number(localStorage.getItem('step'))
        : 1,
      min: localStorage.getItem('min')
        ? Number(localStorage.getItem('min'))
        : -20,
      max: localStorage.getItem('max')
        ? Number(localStorage.getItem('max'))
        : 20,
    };
  }

  inputHandler = (event, type) => {
    if (event.target.value === '') {
      return;
    }
    switch (type) {
      case 'step':
        localStorage.setItem(
          'step',
          !isNaN(event.target.value) ? event.target.value : 1
        );
        this.setState({ step: Number(event.target.value) });
        break;
      case 'max':
        localStorage.setItem(
          'max',
          !isNaN(event.target.value) ? event.target.value : 20
        );
        this.setState({ max: Number(event.target.value) });
        break;
      case 'min':
        localStorage.setItem(
          'min',
          !isNaN(event.target.value) ? event.target.value : -20
        );
        this.setState({ min: Number(event.target.value) });
        break;
    }
  };

  reset = () => {
    this.setState(
      {
        value: 0,
      },
      () => {
        localStorage.setItem('value', 0);
      }
    );
  };

  render() {
    return (
      <div className="Counter-container">
        <div className="counter">
          <Button
            type="minus"
            clicked={() => {
              plusMinusHandler('minus', this);
            }}
          />
          <p className="numberName">{this.state.value}</p>
          <Button
            type="plus"
            clicked={() => {
              plusMinusHandler('plus', this);
            }}
          />
        </div>
        <div className="extra">
          <div className="general">
            <div className="extra-item">
              <label className="labelName">
                <b>Min:</b> <Input type="min" changed={this.inputHandler} />{' '}
              </label>
            </div>
            <div className="extra-item">
              <label className="labelName">
                <b>Max:</b> <Input type="max" changed={this.inputHandler} />
              </label>
            </div>
          </div>
          <div className="extra-item-step">
            <label className="labelName">
              <b>Step:</b> <Input type="step" changed={this.inputHandler} />
            </label>
          </div>
          <div className="extra-item-reset">
            <button
              className="refresh"
              onClick={this.reset}
              disabled={this.state.value === 0}
            >
              <i className="fas fa-redo-alt"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
