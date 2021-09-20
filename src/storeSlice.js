import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myItems: [],
};

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.myItems.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem } = storeSlice.actions;

export default storeSlice.reducer;
