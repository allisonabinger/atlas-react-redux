import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import listReducer from "./slices/ListSlice"
import cardReducer from "./slices/CardSlice"

export const store = configureStore({
  reducer: {
    lists: listReducer,
    cards: cardReducer
  },
});

// types for typescript autocomplete
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// types to dispatch and selector hooks
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
