import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ListType } from "../types";
import { RootState } from "../store";
import { createSelector } from "reselect";

interface ListsState {
  lists: ListType[];
}

const initialState: ListsState = {
  lists: [],
};

export const listSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<{ id: number; title: string }>) => {
      console.log("Adding List:", action.payload); // log the list being added
      state.lists.push({
        id: action.payload.id,
        title: action.payload.title,
        cardIds: [],
      });
      console.log("Updated State:", state.lists); // log the updated state
    },
    removeList: (state, action: PayloadAction<number>) => {
      state.lists = state.lists.filter((list) => list.id !== action.payload);
    },
    addCardToList: (
      state,
      action: PayloadAction<{ listId: Number; cardId: number }>
    ) => {
      const list = state.lists.find(
        (list) => list.id === action.payload.listId
      );
      if (list) {
        list.cardIds.push(action.payload.cardId);
      }
    },
    removeCardFromList: (
      state,
      action: PayloadAction<{ listId: number; cardId: number }>
    ) => {
      const list = state.lists.find(
        (list) => list.id === action.payload.listId
      );
      if (list) {
        list.cardIds = list.cardIds.filter(
          (cardId) => cardId !== action.payload.cardId
        );
      }
    },
    clearBoard: (state) => {
      state.lists = [];
    },
  },
});

export const selectListsState = (state: RootState) => state.lists;

export const selectLists = createSelector(
  [selectListsState],
  (listState) => listState.lists
);

export const {
  addList,
  removeList,
  addCardToList,
  removeCardFromList,
  clearBoard,
} = listSlice.actions;
export default listSlice.reducer;
