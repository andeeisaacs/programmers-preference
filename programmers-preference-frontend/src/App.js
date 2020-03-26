import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import ProgrammersIndex from "./pages/ProgrammersIndex";
import ProgrammersShow from "./pages/ProgrammersShow";
import programmers from "./programmers";
import NewProgrammer from "./pages/NewProgrammer"

class App extends Component {
  constructor () {
    super()
    this.state= {
      allProgrammers: [],
    }  
    this.getProgrammers()
  }
  
  componentWillMount(){
    this.getProgrammers()
  }

  getProgrammers = () => {
    fetch("http://localhost:3000/programmers")
    .then((response)=>{
      if(response.status === 200){
        return(response.json())
      }
    })
    .then((programmersArray)=>{
      this.setState({ allProgrammers: programmersArray })
    })
    }
  
  createProgrammer = (newprogrammer) => {
    return fetch("http://localhost:3000/programmers", {
      body: JSON.stringify(newprogrammer),
      headers: {
          "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then((response) => {
      if(response.ok) {
        return this.getProgrammers()
      }
    })
  }
 
  render() {
  return (
    <>
    <Header />
      
      <Router>
        <Switch>
          <Route exact path="/newprogrammer" render={ (props) => <NewProgrammer handleSubmit={ this.createProgrammer } /> } />
          <Route exact path="/programmer/:id" render={ (props) => <ProgrammersShow { ...props } programmers={ this.state.allProgrammers } /> } />
          <Route exact path="/" render={ (props) => <ProgrammersIndex programmers={ this.state.allProgrammers } /> } />
        </Switch>
      </Router>  
    </>
  );
 }
}

export default App;
