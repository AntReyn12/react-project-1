import React, {useState, useEffect} from "react";
import {useParams, useHistory} from "react-router-dom";
import axios from "axios";
import {CircularProgress} from "@material-ui/core";

const Todo = () => {
  const history = useHistory();
  const {id} = useParams();

  const [todoDetails, setTodoDetails] = useState();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        const responseTodo = res.data;
        setTodoDetails(responseTodo);
      });
  }, []);

  const {id: todoId, userId, title, completed} = todoDetails || {};
  return (
    <div>
      {todoDetails ? (
        <div>
          <button
            style={{margin: "15px"}}
            onClick={() =>
              history.push("https://antreyn12.github.io/react-project-1/")
            }
          >
            Return to home
          </button>
          <div
            style={{color: "black", backgroundColor: "yellow", padding: "15px"}}
          >
            <h2>{`Todo ID is: ${todoId}`}</h2>
            <h2>{`Todo userID is: ${userId}`}</h2>
            <h2>{`Todo title is: ${title}.`}</h2>
            <h2>{`Is todo completed? ${completed}.`}</h2>
          </div>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Todo;
