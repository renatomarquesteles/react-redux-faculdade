import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
  <aside className="menu-area">
    <nav className="menu">
      <Link to="/">
        <i className="fa fa-home"></i> Início
      </Link>
      <Link to="/users">
        <i className="fa fa-users"></i> Usuários
      </Link>
      <Link to="/products">
        <i className="fa fa-product-hunt"></i> Produtos
      </Link>
      <Link to="/compras">
        <i className="fa fa-tag"></i> Compras
      </Link>
    </nav>
  </aside>
);
