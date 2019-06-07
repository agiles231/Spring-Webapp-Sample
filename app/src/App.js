import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import DataList from "./DataList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/emails" exact={true} render={() => <DataList type="emails" count={Math.ceil(Math.random() * 20)} domain="gmail.com" />} />
          <Route path="/ints" exact={true} render={() => <DataList type="ints" count={Math.ceil(Math.random() * 20)} />} />
          <Route path="/doubles" exact={true} render={() => <DataList type="doubles" count={Math.ceil(Math.random() * 20)} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
