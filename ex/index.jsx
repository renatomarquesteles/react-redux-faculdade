// import React from 'react';
// import ReactDOM from 'react-dom';

// import { Primeiro, Segundo, Terceiro } from './component.jsx';
// import FamiliaSilva from './familiaSilva.jsx';
// import Familia from './familia';
// import Membro from './membro';

// ReactDOM.render(
//   <Familia sobrenome="Silva">
//     <Membro nome="Guilherme" />
//     <Membro nome="Pedro" />
//     <Membro nome="Luís" />
//   </Familia>,
//   document.getElementById('app')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import ClassComponent from './classComponent';

ReactDOM.render(<ClassComponent idade="21" />, document.getElementById('app'));
