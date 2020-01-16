import React from 'react';
import axios from 'axios';

class Server extends React.Component{
    constructor(props){
        super(props);

    }

componentDidMount(){
    axios.get('http://3.120.96.16:3001/movies')
    .then(res => {
        const movies = res.data;
        console.log(movies);
        console.log(res.status);
    })
    .catch(err => {
        console.log('Err', err);
    });
}

    render(){
        return(
            <>
            <p>server</p>
            </>
        );
    }
}

export default Server;