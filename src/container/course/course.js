import React from 'react';

const course =(props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.id}</h2>
            <p>{props.body}</p>
        </div>
    );      

}

export default course;