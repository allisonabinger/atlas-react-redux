import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card, List } from "../types";

interface CardsState {
  lists: List[]
}

const initialState: CardsState = {
  lists: []
};

interface AddCardPayload {
    listId: number;
    card: Card;
}

export const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<AddCardPayload>) => {
      // payload is the data
      const { listId, card } = action.payload;
      const list = state.lists.find(list => list.id === listId)
      if (list) {
        list.cards.push(card)
      }
    },
    removeCard: (state, action: PayloadAction<{ listId: number; cardId: number }>) => {
        const { listId, cardId } = action.payload;
        const list = state.lists.find(list => list.id === listId)
        if (list) {
            list.cards = list.cards.filter(card => card.id !== cardId)
        }
    },
  },
});

export const { addCard, removeCard } = cardSlice.actions;
export default cardSlice.reducer;
