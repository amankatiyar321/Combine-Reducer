import React from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const Todo = () => {
  return (
    <>
      <h1>TODO APP</h1>
      <TodoInput />
      <TodoItem />
    </>
  );
};

export default Todo;