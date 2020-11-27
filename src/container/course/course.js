import React, {Component} from 'react';
import axios from 'axios';


class Course extends Component {
    state={
        course:{},
        title:''
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.courseid)
        .then(response => {
            this.setState({course:response.data});
        })
        const query = new URLSearchParams(this.props.location.search);
        for(let params of query.entries()){
            this.setState({title:params[1]})
        }
        

        
    }
    render(){
    return <div>
            <h1>{this.state.title}</h1>
            <h4>{this.state.course.body}</h4>
            </div>
    }     

}

export default Course;