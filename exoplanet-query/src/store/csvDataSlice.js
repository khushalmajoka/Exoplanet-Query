// src/store/csvDataSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  filteredData: [],
  filters: {
    hostname: "",
    disc_method: "",
    disc_year: "",
    disc_facility: "",
  },
  searchClicked: false,
  clearClicked: false,
  toggleDisplay: false,
};

const csvDataSlice = createSlice({
  name: "csvData",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setFilteredData: (state, action) => {
      state.filteredData = action.payload;
    },
    setSearchClicked: (state, action) => {
      state.searchClicked = action.payload;
    },
    setClearClicked: (state, action) => {
      state.clearClicked = action.payload;
    },
    setFilters: (state, action) => {
      const { filterType, filterValue } = action.payload;
      state.filters = { ...state.filters, [filterType]: filterValue };
    },
    setToggleDisplay: (state, action) => {
      state.toggleDisplay = action.payload
    }
  },
});

export const { setData, setFilteredData, setSearchClicked, setClearClicked, setFilters, setToggleDisplay } =
  csvDataSlice.actions;
export default csvDataSlice.reducer;
