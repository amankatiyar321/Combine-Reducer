import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const TodoDetails = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");

  fetch(`http://localhost:8080/todos/${id}`)
    .then((res) => res.json())
    .then((data) => setTitle(data.title));

  const navigate = useNavigate();
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
};

export default TodoDetails;