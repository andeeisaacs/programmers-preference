import React, { Component } from 'react'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText  } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProgrammersShow from "../pages/ProgrammersShow";


class ProgrammersIndex extends Component {

render(){

  
return(
  
  <Router>
  {this.props.programmers.map((programmer, index) => {
  return(
    
    <Card key={ index }>
    <Link to ={`/programmer/${programmer.id}`}>
      <CardHeader>{ programmer.name }</CardHeader>
      </Link>
      <CardBody>
       <CardTitle>{ programmer.age } </CardTitle> 
       <CardText>{ programmer.enjoys }</CardText>
      </CardBody>
    </Card>
    )
  })}
    <Route exact path="/programmer/:id" render={ (props) => <ProgrammersShow { ...props } programmers={ this.props.programmers } /> } />
  </Router>
  
  )
 }
}
export default ProgrammersIndex

