import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import Users from './container/users/users';
import Courses from './container/courses/cousres';

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
        <Route path='/users' component={Users} />
        <Route path='/courses' component={Courses} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
