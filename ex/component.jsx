import React from 'react';

// export default props => (
//   <h1>
//     <br />
//     Nome: {props.nome}
//     <br />
//     Endereço: {props.endereco}
//     <br />
//     Telefone: {props.telefone}
//   </h1>
// );

const Primeiro = props => <h1>Primeiro Componente - {props.nome}</h1>;
const Segundo = props => <h1>Segundo Componente - {props.cidade}</h1>;
const Terceiro = props => <h1>Terceiro Componente - {props.pais}</h1>;

export { Primeiro, Segundo, Terceiro };
