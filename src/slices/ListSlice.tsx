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
    moveCard: (state, action: PayloadAction<{ cardId: number, sourceListId: number, destinationListId: number }>) => {
        const { cardId, sourceListId, destinationListId } = action.payload;
        const sourceList = state.lists.find((list) => list.id === sourceListId);
        const destinationList = state.lists.find((list) => list.id === destinationListId);
        console.log("destination list", destinationList)

        if (sourceList && destinationList) {
            sourceList.cardIds = sourceList.cardIds.filter((id) => id !== cardId);
            destinationList.cardIds.push(cardId)
            console.log("desintation list card ids", destinationList.cardIds)
        } else if (sourceList) {
            console.log("source list: ", sourceList)
        } else if (destinationList) {
            console.log("destinationList: ", destinationList)
        }
    }
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
  moveCard,
} = listSlice.actions;
export default listSlice.reducer;
