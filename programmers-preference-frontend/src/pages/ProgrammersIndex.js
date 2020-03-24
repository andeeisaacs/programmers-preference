import React, { Component } from 'react'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

class ProgrammersIndex extends Component {

render(){
  console.log(this.props.programmers)
  
return(
  <>
  {this.props.programmers.map((programmer, index) => {
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