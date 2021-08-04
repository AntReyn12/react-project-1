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
            <Route
              exact
              path="https://antreyn12.github.io/react-project-1/"
              children={<Todos />}
            />
            <Route
              path="https://antreyn12.github.io/react-project-1/todo/:id"
              children={<Todo />}
            />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
