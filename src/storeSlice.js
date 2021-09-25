import { createSlice } from "@reduxjs/toolkit";
import Dice1 from "./images/Dice-1.png";
import Dice2 from "./images/Dice-2.png";
import Dice3 from "./images/Dice-3.png";
import Dice4 from "./images/Dice-4.png";
import Dice5 from "./images/Dice-5.png";
import Dice6 from "./images/Dice-6.png";
import Dice7 from "./images/Dice-7.png";
import Dice8 from "./images/Dice-8.png";

console.log(typeof Dice1);
const initialState = {
  myItems: [],
  marketplaceItems: [
    {
      itemName: "Platinum Dice",
      price: 450,
      image: Dice1,
      style: {
        boxShadow: "0 0 25px #e9e9e9 inset",
        // border: "2px solid #e9e9e9",
      },
    },
    {
      itemName: "Sapphire Dice",
      price: 450 * 2,

      image: Dice2,
      style: {
        boxShadow: "0 0 25px #245edb inset",
        // border: "2px solid #245edb",
      },
    },
    {
      itemName: "Ruby Dice",
      price: 450 * 3,

      image: Dice3,
      style: {
        boxShadow: "0 0 25px #d52428 inset",
        // border: "2px solid #d52428",
      },
    },
    {
      itemName: "Emerald Dice",
      price: 450 * 4,

      image: Dice4,
      style: {
        boxShadow: "0 0 25px #439d1a inset",
        // border: "2px solid #439d1a",
      },
    },
    {
      itemName: "Amethyst Dice",
      price: 450 * 5,

      image: Dice5,
      style: {
        boxShadow: "0 0 25px #ba07e7 inset",
        // border: "2px solid #ba07e7",
      },
    },
    {
      itemName: "Obsidian Dice",
      price: 450 * 6,

      image: Dice6,
      style: {
        boxShadow: "0 0 25px #5d5d5d inset",
        // border: "2px solid #5d5d5d",
      },
    },
    {
      itemName: "Citrine Dice",
      price: 450 * 7,

      image: Dice7,
      style: {
        boxShadow: "0 0 15px #e5a11d inset",
        // border: "2px solid #e5a11d",
      },
    },
    {
      itemName: "Diamond Dice",
      price: 450 * 8,

      image: Dice8,
      style: {
        boxShadow: "0 0 15px #1ec5d1 inset",
        // border: "2px solid #1ec5d1",
      },
    },
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
