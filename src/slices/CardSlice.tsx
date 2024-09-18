import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardType } from "../types";

type CardState {
  cards: CardType[];
}

const initialState: CardState = {
  cards: []
};

export const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<CardType>) => {
        state.cards.push(action.payload)
    },
    removeCard: (state, action: PayloadAction<number>) => {
        state.cards = state.cards.filter(card => card.id !== action.payload)
    }
  },
});

export const { addCard, removeCard } = cardSlice.actions;
export default cardSlice.reducer;
