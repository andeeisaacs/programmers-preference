import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import ProgrammersIndex from "./pages/ProgrammersIndex";
import ProgrammersShow from "./pages/ProgrammersShow";
import programmers from "./programmers";

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
        </Switch>
      </Router>  
    </>
  );
 }
}

export default App;
