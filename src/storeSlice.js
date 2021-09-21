import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myItems: [],
  marketplaceItems: [
    { itemName: "Board piece 1", price: 45 },
    { itemName: "Board piece 2", price: 45 },
    { itemName: "Board piece 3", price: 45 },
    { itemName: "Board piece 4", price: 45 },
    { itemName: "Board piece 5", price: 45 },
    { itemName: "Board piece 6", price: 45 },
    { itemName: "Board piece 7", price: 45 },
    { itemName: "Board piece 8", price: 45 },
  ],
};

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    buyItem: (state, action) => {
      const item = state.marketplaceItems.splice(action.payload, 1)[0];
      state.myItems.push(item);
    },
    sellItem: (state, action) => {
      const item = state.myItems.splice(action.payload.index, 1)[0];
      item.price = action.payload.sellingPrice;
      state.marketplaceItems.push(item);
    },
  },
});

// Action creators are generated for each case reducer function
export const { buyItem, sellItem } = storeSlice.actions;

export default storeSlice.reducer;
