import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Nav from "./Nav"
import Form from "./task/Form"
import List from "./task/List"
import Edit from "./task/Edit"
//import BottomNav from "./BottomNav"


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
  
function Main(){
  return (
    <Router>
      <main>
        <Nav/>
        <Switch>
          <Route path="/task/list" exact component={List} />
          <Route path="/task/new"  component={Form} />
          <Route path="/task/edit/:id" component={Edit} />
        </Switch>
      </main>
    </Router>
  )
}

export default Main;
ReactDOM.render(<Main />, document.getElementById('task-list'));

//ReactDOM.render(<BottomNav />, document.getElementById("root"));
