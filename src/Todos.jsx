import axios from "axios";
import React, {useEffect, useState} from "react";
import {CircularProgress} from "@material-ui/core";
import TodoCard from "./TodoCard";

const Todos = () => {
  const [todos, setTodos] = useState();
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      const responseTodos = res.data;
      setTodos(responseTodos);
    });
  }, []);

  return (
    <React.Fragment>
      {todos ? (
        <div>
          <h1 style={{color: "yellow"}}>TODO CARDS</h1>
          <div style={{display: "flex", flexWrap: "wrap"}}>
            {todos.map((todo) => (
              <TodoCard todo={todo} />
            ))}
          </div>
        </div>
      ) : (
        <CircularProgress />
      )}
    </React.Fragment>
  );
};

export default Todos;
