import React, { Component } from 'react'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

class ProgrammersIndex extends Component {

render(){
  
  
return(
  <>
{ this.props.programmers.map((programmer, index) => {
  console.log(programmer)
  return(
    <ListGroup key={ index }>
      <h4>{ programmer.name }</h4>
      <small>{ programmer.age } - { programmer.enjoys }</small>
    </ListGroup>
    )
  })}
  </>
  )
 }
}
export default ProgrammersIndex