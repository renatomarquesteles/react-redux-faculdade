import React from 'react';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';

export default props => (
  <div role="form" className="todoForm">
    <Grid cols="12 9 10">
      <input
        id="marca"
        className="form-control"
        placeholder="Adicione uma marca"
        onChange={props.handleMarca}
        value={props.marca}
      />
    </Grid>
    <Grid cols="12 9 10">
      <input
        id="modelo"
        className="form-control"
        placeholder="Adicione um modelo"
        onChange={props.handleModelo}
        value={props.modelo}
      />
    </Grid>
    <Grid cols="12 9 10">
      <input
        id="ano"
        type="number"
        max="2019"
        className="form-control"
        placeholder="Adicione um ano"
        onChange={props.handleAno}
        value={props.ano}
      />
    </Grid>
    <Grid cols="12 9 10">
      <div className="radio">
        <label onClick={() => props.handleFlex(true)}>
          <input type="radio" checked={props.flex} />
          Flex
        </label>
      </div>
      <div className="radio">
        <label onClick={() => props.handleFlex(false)}>
          <input type="radio" checked={!props.flex} />
          Normal
        </label>
      </div>
    </Grid>
    <Grid cols="12 3 2">
      <IconButton
        style="primary"
        icon="plus"
        onClick={props.handleAdd}
      ></IconButton>
    </Grid>
  </div>
);
