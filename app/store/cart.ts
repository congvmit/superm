"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart, ICartProductAddPayload } from "@/types/Cart";


export const cartSlice = createSlice({
  name: "cart",
  // TODO: Separate the initial state into a separate line
  initialState: {
    items: [] as ICart[],
  },
  reducers: {
    addProduct(state, action: PayloadAction<ICartProductAddPayload>): void {
      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.items.push({
          ...(action.payload as ICartProductAddPayload),
          quantity: 1,
        });
      }
    },
    removeProduct(state, action: PayloadAction<ICartProductAddPayload>): void {
      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existingProduct) {
        existingProduct.quantity--;
      }
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;