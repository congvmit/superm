"use client"

import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ICartState, ICartProductAddPayload, ICartProductSearchPayload } from "@/types/Cart"

const initialState: ICartState = {
  items: [],
}
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state: ICartState, action: PayloadAction<ICartProductAddPayload>): void {
      const existingProduct = state.items.find((item) => item.id === action.payload.id)
      if (existingProduct) {
        existingProduct.quantity++
      } else {
        state.items.push({
          ...(action.payload as ICartProductAddPayload),
          quantity: 1,
        })
      }
    },
    removeProduct(state, action: PayloadAction<ICartProductAddPayload>): void {
      const existingProduct = state.items.find((item) => item.id === action.payload.id)
      if (existingProduct) {
        if (existingProduct.quantity > 0) {
          existingProduct.quantity--
        } else {
          state.items = state.items.filter((item) => item.id !== action.payload.id)
        }
      }
    },
  },
})

const cartProductCountSelector = (
  state: ICartState,
  product: ICartProductSearchPayload
): number => {
  const existingProduct = state.items.find((item) => item.id === product.id)
  return existingProduct ? existingProduct.quantity : 0
}

const cartCountSelector = (state: ICartState) => {
  return state.items.reduce((total, product) => total + product.quantity, 0)
}

const cartTotalValueSelector = (state: ICartState) => {
  return state.items.reduce((total, product) => total + product.price * product.quantity, 0)
}

export const { addProduct, removeProduct } = cartSlice.actions
export { cartCountSelector, cartTotalValueSelector, cartProductCountSelector }
