import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  teams: [],
};

export const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    addPlayer: (state, action) => {
      state.list.push({ name: action.payload });
    },
    generateTeams: (state, action) => {
      const numTeams = action.payload;
      const shuffled = [...state.list].sort(() => 0.5 - Math.random());
      state.teams = Array.from({ length: numTeams }, () => []);

      shuffled.forEach((player, index) => {
        state.teams[index % numTeams].push(player);
      });
    },
    clearPlayers: (state) => {
      state.list = [];
      state.teams = [];
    },
    removePlayer: (state, action) => {
        state.list = state.list.filter( player => player.name !== action.payload)
    }
  },
});

export const { addPlayer, generateTeams, clearPlayers, removePlayer } = playersSlice.actions;
export default playersSlice.reducer;
