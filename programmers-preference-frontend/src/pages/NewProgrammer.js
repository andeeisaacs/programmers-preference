import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

class NewProgrammer extends Component {
constructor(props){
  super(props)
  this.state = {
    success: false,
    form:{
      name: '',
      age: '',
      enjoys: ''
    }
  }
}


   handleSubmit = (event) => {
       event.preventDefault()
       this.props.handleSubmit(this.state.form)
       this.setState({
           success:true
       })
   }
   
    handleChange = (event) => {
        let { form } = this.state
        form[event.target.name] = event.target.value
        this.setState({ form: form })
    }
  
    render(){
        
    return (
        <>
        <Form>
        <FormGroup>
          <Label htmlFor="name" id="name">Name</Label>
            <Input
                type="text"
                name="name"
                onChange={ this.handleChange }
                value={ this.state.form.name }
            />
            <Label htmlFor="age" id="age">Age</Label>
            <Input
                type="text"
                name="age"
                onChange={ this.handleChange }
                value={ this.state.form.age }
            />
            <Label htmlFor="age" id="age">Enjoys</Label>
            <Input
                type="text"
                name="enjoys"
                onChange={ this.handleChange }
                value={ this.state.form.enjoys }
            />
        </FormGroup>
        <Link to="/">
          <Button
             name="submit"
             id="submit"
             onClick={ this.handleSubmit }>Create new profile!</Button>
        {this.state.success && <Redirect to="./"/>}
        </Link>
        </Form>
        </>
        )
}
}

export default NewProgrammer


