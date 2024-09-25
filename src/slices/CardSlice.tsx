import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardType } from "../types";

type CardState = {
  cards: CardType[];
}

const initialState: CardState = {
  cards: []
};

interface MoveCardPayload {
    listId: number;
    fromIndex: number;
    toIndex: number;
}

export const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    // moveCard: (state, action: PayloadAction<MoveCardPayload>) => {
    //     const { listId, fromIndex, toIndex } = action.payload;
    //     const cardsInList = state.cards.filter(card => card.listId === listId);
    //     const [movedCard] = cardsInList.splice(fromIndex, 1);
    //     cardsInList.splice(toIndex, 0, movedCard)

    //     state.cards = state.cards.filter(card => card.listId !== listId).concat(cardsInList);
    // },
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
