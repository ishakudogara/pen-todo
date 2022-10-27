import React from "react";
import { Button } from "react-bootstrap";

const Todo = ({ todo, index, markTodo, deleteTodo }) => {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
        {todo.text}
      </span>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}>
          ✔
        </Button>
        <Button variant="outline-warning" onClick={() => deleteTodo(index)}>
          X
        </Button>
      </div>
    </div>
  );
};

export default Todo;
