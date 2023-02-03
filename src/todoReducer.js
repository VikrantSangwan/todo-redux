import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

//CreateSlice will configure all the action for reducer.
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      console.log(action.payload);
      state.value.push(action.payload);
    },
  },
});

// Exporting the actions so that anyone can use it.
export const { add } = todoSlice.actions;

export default todoSlice.reducer;
