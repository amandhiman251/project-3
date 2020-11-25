import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Users from './container/users/users';
import Courses from './container/courses/cousres';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <Route path='/users' component={Users} />
        <Route path='/courses' component={Courses} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
