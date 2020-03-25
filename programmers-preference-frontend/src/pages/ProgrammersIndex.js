import React, { Component } from 'react'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProgrammersShow from "../pages/ProgrammersShow";


class ProgrammersIndex extends Component {

render(){

  
return(
  
  <Router>
  {this.props.programmers.map((programmer, index) => {
  return(
    <ListGroup key={ index }>
    <Link to ={`/programmer/${programmer.id}`}>
      <h4>{ programmer.name }</h4>
      </Link>
      <small>{ programmer.age } - { programmer.enjoys }</small>
    </ListGroup>
    )
  })}
    <Route exact path="/programmer/:id" render={ (props) => <ProgrammersShow { ...props } programmers={ this.props.programmers } /> } />
  </Router>
  
  )
 }
}
export default ProgrammersIndex

