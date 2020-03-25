import React, { Component } from 'react';

class NewProgrammer extends Component {
constructor(props){
  super(props)
  this.state = {
    form:{
      name: '',
      age: '',
      enjoys: ''
    }
  }
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
        </FormGroup>
        </Form>
        </>
        )
}
}

export default NewProgrammer


