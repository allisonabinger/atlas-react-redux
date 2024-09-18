import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { List } from "../types";

interface ListsState {
  lists: List[];
}

const initialState: ListsState = {
  lists: [],
};

export const listSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<List>) => {
      // payload is the data
      state.lists.push(action.payload);
    },
    removeList: (state, action: PayloadAction<number>) => {
      state.lists = state.lists.filter((list) => list.id !== action.payload);
    },
  },
});

export const { addList, removeList } = listSlice.actions;
export default listSlice.reducer;
