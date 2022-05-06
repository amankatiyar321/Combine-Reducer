import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTodo } from "../Pages/todo/action";

const TodoItem = () => {
  let todos = useSelector((state) => state.todos.todos);

  const dispatch = useDispatch();
  useEffect(() => {
    fetch("http://localhost:8080/todos")
      .then((res) => res.json())
      .then((data) => dispatch(getTodo(data)));
  }, []);

  const handleToggle = (item) => {
    fetch(`http://localhost:8080/todos/${item.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(
        item.status ? { ...item, status: false } : { ...item, status: true }
      )
    }).then(() => {
      fetch("http://localhost:8080/todos")
        .then((res) => res.json())
        .then((data) => dispatch(getTodo(data)));
    });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/todos/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    }).then(() => {
      fetch("http://localhost:8080/todos")
        .then((res) => res.json())
        .then((data) => dispatch(getTodo(data)));
    });
  };

  const navigate = useNavigate();
  return (
    <div>
      {todos.map((item) => (
        <div key={item.id}>
          <h1 onClick={() => navigate(`/todo/${item.id}`)}>{item.title}</h1>
          <p>Status: {item.status ? "Done" : "Pending"}</p>
          <button onClick={() => handleToggle(item)}>
            {item.status ? "Mark Undone" : "Mark Done"}
          </button>
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => handleDelete(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoItem;