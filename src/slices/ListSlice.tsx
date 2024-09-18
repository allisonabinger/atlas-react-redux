import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ListType } from "../types";

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
    addList: (state, action: PayloadAction<{ id: number; title: string}>) => {
        // adds list with empty cards
      state.lists.push({ id: action.payload.id, title: action.payload.title, cardIds: [] });
    },
    removeList: (state, action: PayloadAction<number>) => {
      state.lists = state.lists.filter((list) => list.id !== action.payload);
    },
    addCardToList: (state, action: PayloadAction<{ listId: Number; cardId: number }>) => {
        const list = state.lists.find(list => list.id === action.payload.listId);
        if (list) {
            list.cardIds.push(action.payload.cardId);
        }
    },
    removeCardFromList: (state, action: PayloadAction<{ listId: number; cardId: number }>) => {
        const list = state.lists.find(list => list.id === action.payload.listId);
        if (list) {
            list.cardIds = list.cardIds.filter(cardId => cardId !== action.payload.cardId);
        }
    },
    clearBoard: (state) => {
        state.lists = [];
    }
  },
});

export const { addList, removeList, addCardToList, removeCardFromList, clearBoard } = listSlice.actions;
export default listSlice.reducer;
