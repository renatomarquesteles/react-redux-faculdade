import React from 'react';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';

export default props => (
  <div role="form" className="todoForm">
    <Grid cols="12 9 10">
      <form>
        <div className="form-group">
          <label>Marca</label>
          <input
            id="marca"
            className="form-control"
            placeholder="Adicione uma marca"
            onChange={props.handleMarca}
            value={props.marca}
          />
        </div>
        <div className="form-group">
          <label>Modelo</label>
          <input
            id="modelo"
            className="form-control"
            placeholder="Adicione um modelo"
            onChange={props.handleModelo}
            value={props.modelo}
          />
        </div>
        <div className="form-group">
          <label>Ano</label>
          <input
            id="ano"
            type="text"
            className="form-control"
            placeholder="Adicione um ano"
            onChange={props.handleAno}
            value={props.ano}
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end'
          }}
        >
          <div>
            <label>Flex</label>
            <div className="radio">
              <label onClick={() => props.handleFlex(true)}>
                <input type="radio" readOnly checked={props.flex} />
                Sim
              </label>
              <label
                onClick={() => props.handleFlex(false)}
                style={{ marginLeft: 15 }}
              >
                <input type="radio" readOnly checked={!props.flex} />
                Não
              </label>
            </div>
          </div>
          <p>
            <IconButton style="primary" icon="plus" onClick={props.handleAdd} />
          </p>
        </div>
      </form>
    </Grid>
  </div>
);
