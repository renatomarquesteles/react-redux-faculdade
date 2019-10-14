import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Logo from '../components/template/Logo';
import Nav from '../components/template/Nav';
import Routes from './Routes';
import Footer from '../components/template/Footer';

export default props => (
  <BrowserRouter>
    <div className="app">
      <Logo />
      <Nav />
      <Routes />
      <Footer />
      <ToastContainer autoClose={3000} />
    </div>
  </BrowserRouter>
);
