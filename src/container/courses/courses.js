import React, { Component } from 'react';
import axios from 'axios';
//import Course from '../course/course';
import './courses.css';

class Courses extends Component {
    state ={
        courses:[]
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then (
            response => {
            let data = response.data.slice(0, 4);
            this.setState({courses:data});
            }
        );
    }
    render() {
        let course = this.state.courses.map(course => {
            return (
                <h1 className="courses" onClick={this.courseHandler}>{course.title}</h1>)
        });
        return(
            <div>
                {course}
            </div>
        );
    }

}

export default Courses;