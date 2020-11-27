import React, {Component} from 'react';
import axios from 'axios';


class Course extends Component {
    state={
        course:{},
        title:'',
        axios: null
    }
    componentDidMount() {
        this.clickchangetitleHandler();
    }
        
    componentDidUpdate(){
        this.clickchangetitleHandler();
    }
    clickchangetitleHandler(){
        let courseid = this.props.match.params.courseid;
        const query = new URLSearchParams(this.props.location.search);
        for(let params of query.entries()){
            if(this.state.title !== params[1]){
            this.setState({title:params[1]})
            }
        } 
        
            if (this.state.axios!==courseid){
                this.setState({axios:courseid});
        axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.courseid)
        .then(response => {
            this.setState({course:response.data});
                console.log(response.data);
        }) 
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