import React, { Component } from 'react';
import axios from 'axios';

import PageHeader from '../template/pageHeader';
import CarForm from './carForm';
import CarList from './carList';

const URL = 'http://localhost:3003/api/cars';

export default class Car extends Component {
  constructor(props) {
    super(props);
    this.state = { marca: '', modelo: '', ano: 2019, flex: false, list: [] };
    this.handleMarca = this.handleMarca.bind(this);
    this.handleModelo = this.handleModelo.bind(this);
    this.handleAno = this.handleAno.bind(this);
    this.handleFlex = this.handleFlex.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.refresh();
  }

  refresh() {
    axios.get(`${URL}?sort=-createdAt`).then(resp =>
      this.setState({
        ...this.state,
        marca: '',
        modelo: '',
        ano: 2019,
        flex: false,
        list: resp.data
      })
    );
  }

  handleMarca(e) {
    this.setState({ ...this.state, marca: e.target.value });
  }

  handleModelo(e) {
    this.setState({ ...this.state, modelo: e.target.value });
  }

  handleAno(e) {
    this.setState({ ...this.state, ano: Number(e.target.value) });
  }

  handleFlex(flex) {
    this.setState({ ...this.state, flex });
  }

  handleAdd() {
    const { marca, modelo, ano, flex } = this.state;
    axios.post(URL, { marca, modelo, ano, flex }).then(resp => this.refresh());
  }

  handleRemove(car) {
    axios.delete(`${URL}/${car._id}`).then(resp => this.refresh());
  }

  render() {
    return (
      <div>
        <PageHeader name="Carros" small="Cadastro"></PageHeader>
        <CarForm
          marca={this.state.marca}
          modelo={this.state.modelo}
          ano={this.state.ano}
          flex={this.state.flex}
          handleMarca={this.handleMarca}
          handleModelo={this.handleModelo}
          handleAno={this.handleAno}
          handleFlex={this.handleFlex}
          handleAdd={this.handleAdd}
        />
        <CarList list={this.state.list} handleRemove={this.handleRemove} />
      </div>
    );
  }
}
