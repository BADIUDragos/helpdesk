import React from 'react';
import './App.css';
import ReactClass from 'create-react-class';
import Home from './MainPage'
import { BrowserRouter, Route, Switch, } from 'react-router-dom'


export default  App =>(

  <BrowserRouter>
    <Switch>
      <Route exact path={["","/", "/home","/issues"]} render={props => <Home {...props} />} />
    </Switch>
  </BrowserRouter >

);
