import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';
import Users from './container/users/users';
import Courses from './container/courses/courses';
import Course from './container/course/course';

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
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
