import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../todoReducer";

export const store = configureStore({
  //name of reducer should be same as created in reducer file.
  reducer: {
    todo: todoReducer,
  },
});
