import React from 'react';

export default props => (
  <header className="page-header">
    <h2>
      {props.titulo} <small>{props.subtitulo}</small>
    </h2>
  </header>
);
