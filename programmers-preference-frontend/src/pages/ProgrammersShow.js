import React, { Component } from 'react';
import { Button } from 'reactstrap';
class ProgrammersShow extends Component{
    render(){
        console.log(this.props.match.params)
        const { id } = this.props.match.params
        const programmers = this.props.programmers.find((programmers) => programmers.id === parseInt(id))
        
return(
        <>
            <h3> { programmers.name } </h3>
            <p> { programmers.age } </p>
            <p> { programmers.enjoys } </p>
        </>    
    )
}
}


export default ProgrammersShow


