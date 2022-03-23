/**
 * Esta aplicação web será dividida (pelo menos por enquanto) em três partes:
 * -> app = aplicação em si
 * -> login(cadastro)
 * -> aprensentação = página de apresentação da aplicação
 */

import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/main'

ReactDOM.render(
  <React.StrictMode>
    <Main /> 
  </React.StrictMode>,
  
  document.getElementById('root')
);
