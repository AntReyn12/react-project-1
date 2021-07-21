import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Todos from "./Todos";
import Todo from "./Todo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/" children={<Todos />} />
            <Route path="/todo/:id" children={<Todo />} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
