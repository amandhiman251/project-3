import React, {Component} from 'react';
import axios from 'axios';


class Course extends Component {
    state={
        course:{}
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.courseid)
        .then(response => {
            let data = response.data;
            this.setState({course:data});
        })

            //console.log(this.state.course);
    }
    render(){
        let course = this.state.course;
        const bc = course.title;
        const sc = course.body;
    return <div>
            <h1>{bc}</h1>
            <h4>{sc}</h4>
            </div>
    }
    // return (
    //     <div>
    //         <h1>{props.title}</h1>
    //         <h2>{props.id}</h2>
    //         <p>{props.body}</p>
    //     </div>
    // );      

}

export default Course;