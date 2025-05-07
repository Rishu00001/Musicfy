import { createSlice } from "@reduxjs/toolkit";

const PlaylistSlice = createSlice({
  name: "playlist",
  initialState: [],
  reducers: {
    addSong: (state, action) => {
      //ye line smjhna hai
      let exist = state.find(
        (song) => song.songIndex == action.payload.songIndex
      );
      if (exist) return;
      state.push(action.payload);
    },
    removeSong: (state, action) => {
      //yaha confusion hai
      return state.filter((song) => song.songIndex !== action.payload);
    },
  },
});
export const { addSong , removeSong} = PlaylistSlice.actions;
export default PlaylistSlice.reducer;
