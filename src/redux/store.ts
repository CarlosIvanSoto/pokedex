import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./features/countSlice";
import pokeSlice from "./features/pokeSlice";

export const store = configureStore({
  reducer: {
    count: countSlice,
    poke: pokeSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch