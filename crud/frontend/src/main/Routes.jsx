import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Home from '../components/home/Home';
import UserCrud from '../components/user/UserCrud';
import ProductCrud from '../components/product/ProductCrud';
import ComprasCrud from '../components/compras/CompraCrud';

export default props => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/users" component={UserCrud} />
    <Route path="/products" component={ProductCrud} />
    <Route path="/compras" component={ComprasCrud} />
    <Redirect from="*" to="/" />
  </Switch>
);
