import React, { Component } from 'react';
import './App.css';
import Button from './components/button/button.jsx';
import Input from './components/input/input.jsx';

const data = localStorage.getItem('value');
class App extends Component {
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

  plusMinusHandler = (type) => {
    let result;

    switch (type) {
      case 'plus':
        result =
          this.state.step + this.state.value > this.state.max
            ? this.state.value
            : this.state.step + this.state.value;
        localStorage.setItem('value', !isNaN(result) ? result : 0);
        this.setState({ value: !isNaN(result) ? result : 0 });
        break;

      case 'minus':
        result =
          this.state.value - this.state.step < this.state.min
            ? this.state.value
            : this.state.value - this.state.step;
        localStorage.setItem('value', !isNaN(result) ? result : 0);
        this.setState({ value: !isNaN(result) ? result : 0 });
        break;
    }
  };

  inputHandler = (elem, type) => {
    switch (type) {
      case 'step':
        localStorage.setItem(
          'step',
          !isNaN(elem.target.value) ? elem.target.value : 1
        );
        this.setState({ step: Number(elem.target.value) });
        break;
      case 'max':
        localStorage.setItem(
          'max',
          !isNaN(elem.target.value) ? elem.target.value : 20
        );
        this.setState({ max: Number(elem.target.value) });
        break;
      case 'min':
        localStorage.setItem(
          'min',
          !isNaN(elem.target.value) ? elem.target.value : -20
        );
        this.setState({ min: Number(elem.target.value) });
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
      <div className="App">
        <div className="counter">
          <Button type="minus" clicked={this.plusMinusHandler} />
          <p className="numberName">{this.state.value}</p>
          <Button type="plus" clicked={this.plusMinusHandler} />
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

export default App;
