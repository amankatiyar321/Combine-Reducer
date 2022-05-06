import { ADD_TODO, GET_TODO } from "./action";

const initState = {
  todos: []
};

export const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload]
      };
    case GET_TODO:
      return {
        todos: [...action.payload]
      };
    default:
      return state;
  }
};