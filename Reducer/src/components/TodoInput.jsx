import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo } from "../Pages/todo/action";

const TodoInput = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const handleAdd = () => {
    const payload = {
      id: uuid(),
      title,
      status: false
    };
    fetch(" http://localhost:8080/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    dispatch(addTodo(payload));
    setTitle("");
  };
  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New Todo item"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoInput;