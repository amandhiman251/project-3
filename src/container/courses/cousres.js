import React, { Component } from 'react';
import axios from 'axios';
import Course from '../course/course';

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
                <Course  
                key={course.id}
                id={course.id}
                title ={course.title} 
                body={course.body}
            /> )
        });
        return(
            <div>
                {course}
            </div>
        );
    }

}

export default Courses;