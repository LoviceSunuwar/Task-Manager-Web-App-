import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import { projectReducer } from "./reducers/projectReducer";

const store = configureStore({
  reducer: {
    userReducer,
    projectReducer,
  },
});

export default store;
