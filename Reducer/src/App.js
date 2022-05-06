import { Route, Routes } from "react-router-dom";
import Todo from "./components/Todo";
import "./styles.css";
import TodoDetails from "./components/TodoDetails";
import Login from "./components/Login";
import { useSelector } from "react-redux";

export default function App() {
  let isAuth = useSelector((state) => state.auth.isAuth);
  if (isAuth === false) {
    let data = JSON.parse(localStorage.getItem("token")) || {
      isAuth: false,
      token: ""
    };
    isAuth = data.isAuth;
  }
  console.log(isAuth);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={isAuth ? <Todo /> : <Login />} />
        <Route
          path="/todo/:id"
          element={isAuth ? <TodoDetails /> : <Login />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}