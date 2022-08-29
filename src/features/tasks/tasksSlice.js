import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  toDo: [],
  inProgress: [],
  completed: [],
};

export const taskListSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addTask: (state, action) => {
      //   const targetListIndex = findItemIndexById(state.lists, action.payload.id);
      const targetListIndex = state.lists.findIndex(
        (item) => item.id === action.payload.id
      );
      state.boards[targetListIndex].boards.push({
        id: nanoid(),
        text: action.payload.text,
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask } = taskListSlice.actions;

export default taskListSlice.reducer;
