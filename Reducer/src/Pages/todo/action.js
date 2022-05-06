export const ADD_TODO = "ADD_TODO";
export const GET_TODO = "GET_TODO";

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload
});

export const getTodo = (payload) => ({
  type: GET_TODO,
  payload
});