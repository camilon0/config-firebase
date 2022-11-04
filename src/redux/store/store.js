import { configureStore } from "@reduxjs/toolkit";
import { userReducers } from "../reducers/userReducers";

const reducer = {
  user: userReducers,
};
const store = configureStore({
  reducer,
  devTool: process.env.NODE_ENV !== "production",
});

export default store;
