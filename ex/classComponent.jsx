import React, { Component } from 'react';

import Calculadora from './calculadora';

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { idade: props.idade };
    this.handleIdade = this.handleIdade.bind(this);
  }

  handleIdade(event) {
    this.setState({
      idade: Number(event.target.value)
    });
  }

  opera(x) {
    this.setState({ idade: this.state.idade + x });
  }

  render() {
    return (
      // <div>
      //   <h1>{this.props.label}</h1>
      //   <h2>
      //     <input value={this.state.idade} onChange={this.handleIdade} />
      //   </h2>
      //   <button onClick={() => this.opera(1)}>Incrementa</button>
      //   <button onClick={() => this.opera(-1)}>Decrementa</button>
      // </div>
      <Calculadora />
    );
  }
}
