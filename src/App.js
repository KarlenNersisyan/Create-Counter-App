import React, { Component } from 'react';
import './App.css';
import Button from './components/button/button';
import Input from './components/input/input';

class App extends Component {
  state = {
    value: 0,
    step: 3,
    min: -5,
    max: 10,
  };

  plusMinusHandler = (type) => {
    let result;

    switch (type) {
      case 'plus':
        result =
          this.state.step + this.state.value >= this.state.max
            ? this.state.max
            : this.state.step + this.state.value;
        this.setState({ value: result });
        break;
      case 'minus':
        result =
          this.state.value - this.state.step <= this.state.min
            ? this.state.min
            : this.state.value - this.state.step;
        this.setState({ value: result });
        break;
    }
  };

  inputHandler = (e, type) => {
    switch (type) {
      case 'step':
        this.setState({ step: +e.target.value });
        break;
      case 'max':
        this.setState({ max: +e.target.value });
        break;
      case 'min':
        this.setState({ min: +e.target.value });
        break;
    }
  };

  render() {
    return (
      <div className="App">
        <div className="counter">
          <Button type="minus" clicked={this.plusMinusHandler} />
          <p>{this.state.value}</p>
          <Button type="plus" clicked={this.plusMinusHandler} />
        </div>
        <div className="extra">
          <label>Step</label>
          <Input type="step" changed={this.inputHandler} />
          <label>Max</label>
          <Input type="max" changed={this.inputHandler} />
          <label>Min</label>
          <Input type="min" changed={this.inputHandler} />
        </div>
      </div>
    );
  }
}

export default App;
