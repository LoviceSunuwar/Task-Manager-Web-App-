const initialState = {
  users: {},
  token: "",
  message: "",
  islogin: false,
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        users: action.payload.user,
        token: action.payload.token,
        message: action.payload.message,
        islogin: true,
      };
    case "LOGIN":
      return {
        ...state,
        token: action.payload.data.token,
        message: action.payload.data.message,
        islogin: action.payload.islogin,
      };
    case "ALREADYLOGGEDIN": {
      return {
        ...state,
        token: action.payload.token,
        islogin: action.payload.login,
      };
    }
    default:
      return state;
  }
};
