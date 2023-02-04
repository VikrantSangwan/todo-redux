import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

//CreateSlice will configure all the action for reducer.
//initalState is key so added with same name as created by you.

//creating a slice which manages actions for reducer
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      console.log(action.payload);
      state.value.push(action.payload);
    },
    update: (state, action) => {
      console.log(action.payload);
      state.value[action.payload.index] = action.payload.text;
    },
  },
});

//a gateway for listening to data. state is current state of data of reducer.
export const todoSelector = (state) => state.todo.value;

// Exporting the actions so that anyone can use it using dispatcher.
export const { add, update } = todoSlice.actions;

//for store
export default todoSlice.reducer;
