import React, { Component } from 'react';
import axios from 'axios';
import './courses.css';
import {Route, Link} from 'react-router-dom';


class Courses extends Component {
    state ={
        courses:[]
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then (
            response => {
            let data = response.data.slice(0, 4);
            this.setState({courses:data});
            //console.log(response);
            }
        );

    }
    render() {
           let course = this.state.courses.map(course => {
            return (
                <Link key={course.id} to={{
                    pathname: this.props.match.url + '/' + course.id,
                    title: course.title
                    }}>
                    <h1>{course.title}</h1>
                    </Link>)})
        return(
            <div>
                {course}
            </div>
        );
    }

}

export default Courses;