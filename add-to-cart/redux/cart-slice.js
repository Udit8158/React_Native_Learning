import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],

  // Reducers
  reducers: {
    addItemToCart: function (state, item) {
      // Add the item to the cart or update the qty if already exist
      const foundItem = state.find((i) => i.id === item.payload.id);

      if (!foundItem) {
        state.push({ ...item.payload, qty: 1 });
      } else {
        state.forEach((i) => {
          i.id === item.payload.id && i.qty++;
        });
      }
    },

    incrementItemQty: function (state, item) {
      // update qty of that item
      state.forEach((i) => {
        i.id === item.payload.id && i.qty++;
      });
    },
    decrementItemQty: function (state, item) {
      // update qty of that item
      state.forEach((i) => {
        if (i.id === item.payload.id && i.qty > 1) {
          i.qty--;
        }
      });
    },
  },
});

export default cartSlice;
export const { addItemToCart, incrementItemQty, decrementItemQty } =
  cartSlice.actions;
