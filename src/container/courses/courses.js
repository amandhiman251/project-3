import React, { Component } from 'react';
import axios from 'axios';
import Course from '../course/course';
import './courses.css';
import {Route, Link} from 'react-router-dom';


let course;
class Courses extends Component {
    state ={
        courses:[],
        course:true
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then (
            response => {
            let data = response.data.slice(0, 4);
            this.setState({courses:data});
            console.log(response);
            }
        );

    }
    

    // courseHandler=() =>{
    //     this.setState({course:false});
    // }
    render() {
            //this.state.course?
            course = this.state.courses.map(course => {
            return (
                <Link key={course.id} to={this.props.match.url + '/course'}>
                    <h1>{course.title}</h1></Link>)})
        {/* <h1 className="courses" key={course.id}>{course.title}</h1></Link>)}) */}
        // }): course = this.state.courses.map(course => {
        //     return (
        //         <Course 
        //         key={course.id}
        //         title={course.title}
        //         body ={course.body}
        //         id={course.id} />
        //     )
        // });
        return(
            <div>
                {course}
            </div>
        );
    }

}

export default Courses;