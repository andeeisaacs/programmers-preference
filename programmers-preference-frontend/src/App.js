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
      allProgrammers: programmers
    }  
  }
 
  render() {
  return (
    <>
    <Header />
      
      <Router>
        <Switch>
          <Route exact path="/programmer/:id" render={ (props) => <ProgrammersShow { ...props } programmers={ this.state.allProgrammers } /> } />
          <Route exact path="/" render={ (props) => <ProgrammersIndex programmers={ this.state.allProgrammers } /> } />
          <Route exact path="/newprogrammer" component={NewProgrammer} />
        </Switch>
      </Router>  
    </>
  );
 }
}

export default App;
