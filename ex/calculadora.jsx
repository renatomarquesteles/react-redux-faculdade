import React, { Component } from 'react';

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      result: 0
    };
    this.handleNum1 = this.handleNum1.bind(this);
    this.handleNum2 = this.handleNum2.bind(this);
  }

  handleNum1(event) {
    this.setState({
      num1: Number(event.target.value)
    });
  }

  handleNum2(event) {
    this.setState({
      num2: Number(event.target.value)
    });
  }

  opera(op) {
    switch (op) {
      case 'soma':
        this.setState({
          result: this.state.num1 + this.state.num2,
          operador: '+'
        });
        break;
      case 'subtrai':
        this.setState({
          result: this.state.num1 - this.state.num2,
          operador: '-'
        });
        break;
      case 'multiplica':
        this.setState({
          result: this.state.num1 * this.state.num2,
          operador: '*'
        });
        break;
      case 'divide':
        this.setState({
          result: this.state.num1 / this.state.num2,
          operador: '/'
        });
        break;
    }
  }

  render() {
    return (
      <div>
        <h1>Calculadora</h1>

        <div>
          <input value={this.state.num1} onChange={this.handleNum1} />
          <span>{this.state.operador}</span>
          <input value={this.state.num2} onChange={this.handleNum2} />
          <label> = {this.state.result} </label>
        </div>

        <p>
          <button onClick={() => this.opera('soma')}>+</button>
        </p>
        <p>
          <button onClick={() => this.opera('subtrai')}>-</button>
        </p>
        <p>
          <button onClick={() => this.opera('multiplica')}>*</button>
        </p>
        <p>
          <button onClick={() => this.opera('divide')}>/</button>
        </p>
      </div>
    );
  }
}
