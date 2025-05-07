import { createSlice } from "@reduxjs/toolkit";

const LikedSlice = createSlice({
  name: "liked",
  initialState: [],
  reducers: {
    addLike: (state, action) => {
      //ye line smjhna hai
      let exist = state.find(
        (song) => song.songIndex == action.payload.songIndex
      );
      if (exist) return;
      state.push(action.payload);
    },
    removeLike: (state, action) => {
      //yaha confusion hai
      return state.filter((song) => song.songIndex !== action.payload);
    },
  },
});
export const { addLike , removeLike} = LikedSlice.actions;
export default LikedSlice.reducer;
