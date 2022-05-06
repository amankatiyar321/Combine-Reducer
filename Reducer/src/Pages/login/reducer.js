import { LOGIN_SUCCESS } from "./action";

const initState = {
  isAuth: false,
  token: ""
};

const saveData = (token, data = "") => {
  localStorage.setItem(token, JSON.stringify(data));
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      console.log(action.payload);
      saveData("token", { isAuth: true, token: action.payload });
      return {
        isAuth: true,
        token: action.payload
      };
    }

    default:
      return state;
  }
};