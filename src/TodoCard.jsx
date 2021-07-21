import React from "react";
import {useHistory} from "react-router";

const TodoCard = (props) => {
  const history = useHistory();
  const {todo} = props;
  const {id, title, completed} = todo;
  return (
    <div
      style={{
        backgroundColor: "yellow",
        margin: "15px",
        padding: "15px",
        width: "225px",
        color: "black",
      }}
      onClick={() => history.push(`/todo/${id}`)}
    >
      <h4>{title}</h4>
      <h6>{`Completed: ${completed}`}</h6>
    </div>
  );
};

export default TodoCard;
