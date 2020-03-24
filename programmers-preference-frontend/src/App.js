import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import Header from "./components/Header";
import ProgrammersIndex from "./pages/ProgrammersIndex";
import ProgrammersShow from "./pages/ProgrammersShow";

class App extends Component {
  render() {
  return (
    <>
    <Header />
      <Router>
        <Switch>
          <Route exact path="/programmer/:id" component={ ProgrammersShow } />
          <Route exact path="/" component={ ProgrammersIndex } />
        </Switch>
      </Router>  
    </>
  );
 }
}

export default App;
