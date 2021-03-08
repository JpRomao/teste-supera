import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Games from '../pages/Games';
import Checkout from '../pages/Checkout';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/Games" component={Games}/>
    <Route path="/Checkout/:items+" component={Checkout}/>
  </Switch>
)

export default Routes;
