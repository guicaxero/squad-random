import { configureStore } from "@reduxjs/toolkit";
import playersSlice from "./Players";

export const store = configureStore({
  reducer: {
    players: playersSlice,
  },
});
