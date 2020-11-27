import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, NavLink, Switch, Redirect} from 'react-router-dom';
import Users from './container/users/users';
import Courses from './container/courses/courses';
import Error from '../src/404error/404error';
class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li><NavLink activeClassName='navlink' to='/users'>Users</NavLink></li>
            <li><NavLink activeStyle={{color:'blue'}} to='courses'>Courses</NavLink></li>
          </ul>

        </nav>
        <Switch>
          <Route path='/users' component={Users} />
          <Route path='/courses' component={Courses} />
          <Redirect from='/all-courses' to='/courses' />
          <Route component={Error} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
