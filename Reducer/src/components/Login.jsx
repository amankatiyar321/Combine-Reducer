import React, { useState } from "react";
import styled from "styled-components";
import { loginSuccess } from "../Pages/login/action";
import { useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";

const Field = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0px;
`;

const MainDiv = styled.div`
  width: 250px;
  padding: 30px 20px;
  margin: auto;
  margin-top: 50px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
`;

const Login = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const payload = {
      ...formData,
      [e.target.name]: e.target.value
    };
    console.log(payload);
    setFormData(payload);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /* {
     "email": "eve.holt@reqres.in",
     "password": "cityslicka"
     }
     {
     "token": "QpwL5tke4Pnpja7X4"
     }
    */
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          console.log(data);
          dispatch(loginSuccess(data.token));
        } else {
          console.log(data);
          alert("invalid credentials");
        }
      });
  };
  const navigate = useNavigate();
  return (
    <MainDiv>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <Field>
          <div>
            <label>Email</label>
          </div>
          <div>
            <input
              onChange={handleChange}
              name="email"
              type="text"
              placeholder="Enter email id"
            />
          </div>
        </Field>
        <Field>
          <div>
            <label>Password</label>
          </div>
          <div>
            <input
              onChange={handleChange}
              name="password"
              type="text"
              placeholder="Enter password"
            />
          </div>
        </Field>
        <div>
          <button onClick={() => navigate("/")} type="submit">
            Submit
          </button>
        </div>
      </form>
    </MainDiv>
  );
};

export default Login;