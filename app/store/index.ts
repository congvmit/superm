"use client";

import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export { store };
