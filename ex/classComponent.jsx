import React, { Component } from 'react';

export default class ClassComponent extends Component {
  render() {
    return <h1>Idade: {this.props.idade}</h1>;
  }
}
