// src/store/csvDataSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  searchClicked: false,
  clearClicked: false,
};

const csvDataSlice = createSlice({
  name: "csvData",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setSearchClicked: (state) => {
      state.searchClicked = !state.searchClicked;
    },
    setClearClicked: (state, action) => {
      state.clearClicked = action.payload;
    }
  },
});

export const { setData, setSearchClicked, setClearClicked } = csvDataSlice.actions;
export default csvDataSlice.reducer;
