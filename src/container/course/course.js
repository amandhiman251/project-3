import React, {Component} from 'react';
import axios from 'axios';


class Course extends Component {
    state={
        course:{}
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.courseid)
        .then(response => {
            this.setState({course:response.data});
        })

            //console.log(this.state.course);
    }
    render(){
        console.log(this.props);
    return <div>
            <h1>{this.props.match.params.coursetitle}</h1>
            <h4>{this.state.course.body}</h4>
            </div>
    }     

}

export default Course;