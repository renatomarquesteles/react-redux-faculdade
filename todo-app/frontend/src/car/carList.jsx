import React from 'react';

import IconButton from '../template/iconButton';
import Grid from '../template/grid';

export default props => {
  const renderRows = () => {
    const list = props.list || [];
    return list.map(car => (
      <tr key={car._id}>
        <td>{car.marca}</td>
        <td>{car.modelo}</td>
        <td>{car.ano}</td>
        <td>{car.flex ? 'Sim' : 'Não'}</td>
        <td>
          <IconButton
            style="danger"
            icon="trash-o"
            onClick={() => props.handleRemove(car)}
          ></IconButton>
        </td>
      </tr>
    ));
  };

  return (
    <Grid cols="12 9 10">
      <table className="table">
        <thead>
          <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Ano</th>
            <th>Flex</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </Grid>
  );
};
