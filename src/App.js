import React, { Component } from 'react';
import './App.css';
import Button from './components/button/button.jsx';
import Input from './components/input/input.jsx';
const data = localStorage.getItem('value');
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: localStorage.getItem('value') ? +localStorage.getItem('value') : 0,
      step: localStorage.getItem('step') ? localStorage.getItem('step') : 1,
      min: localStorage.getItem('min') ? localStorage.getItem('min') : 0,
      max: localStorage.getItem('max') ? localStorage.getItem('max') : 50,
    };
  }

  plusMinusHandler = (type) => {
    let result;

    switch (type) {
      case 'plus':
        result =
          this.state.step + this.state.value >= this.state.max
            ? this.state.value
            : this.state.step + this.state.value;
        localStorage.setItem('value', result);
        this.setState({ value: result });
        break;
      case 'minus':
        result =
          this.state.value - this.state.step <= this.state.min
            ? this.state.value
            : this.state.value - this.state.step;
        localStorage.setItem('value', result);
        this.setState({ value: result });
        break;
    }
  };

  inputHandler = (elem, type) => {
    switch (type) {
      case 'step':
        localStorage.setItem('step', +elem.target.value);
        this.setState({ step: +elem.target.value });
        break;
      case 'max':
        localStorage.setItem('max', +elem.target.value);
        this.setState({ max: +elem.target.value });
        break;
      case 'min':
        localStorage.setItem('min', +elem.target.value);
        this.setState({ min: +elem.target.value });
        break;
    }
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
        </div>
      </div>
    );
  }
}

export default App;
