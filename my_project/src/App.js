import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';
import './style/reset.css';
import Login from './pages/login/login';
import Admin from './pages/admin/admin';

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/admin' component={Admin}/>
        </Switch>
      
      </div>
    )
  }
}

