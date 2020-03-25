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
    console.log(this.state.allProgrammers)
  return (
    <>
    <Header />
      <Router>
        <Switch>
          {/* <Route exact path="/programmer/:id" component={ ProgrammersShow } /> */}
          <Route exact path="/" render={ (props) => <ProgrammersIndex programmers={ this.state.allProgrammers } /> } />
        </Switch>
      </Router>  
    </>
  );
 }
}

export default App;
