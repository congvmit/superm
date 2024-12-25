import React from "react"
import { render, screen, fireEvent, waitFor, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { cartSlice } from "@/store/cart"
import Product from "@/components/Product"
import { IProduct } from "@/types/Product"

const createTestStore = () => 
  configureStore({
    reducer: {
      cart: cartSlice.reducer
    }
  })

beforeEach(() => {
  cleanup()
})

const product: IProduct = {
  id: 1,
  price_id: "price_1",
  name: "Test Product",
  description: "This is a test product",
  price: 10,
  image: "/test-image.jpg",
}

test("renders the product with the correct details", () => {
  const testStore = createTestStore()
  render(
    <Provider store={testStore}>
      <Product details={product} />
    </Provider>
  )
  expect(screen.getByText("Test Product")).toBeInTheDocument()
  expect(screen.getByText("This is a test product")).toBeInTheDocument()
  expect(screen.getByText("$10")).toBeInTheDocument()
})

test("adds product to cart when add button is clicked", () => {
  const testStore = createTestStore()
  render(
    <Provider store={testStore}>
      <Product details={product} />
    </Provider>
  )
  const addButton = screen.getByTestId(`add-to-cart-${product.id}`)
  fireEvent.click(addButton)
  expect(screen.getByTestId(`quantity-${product.id}`)).toHaveTextContent("1")
})

test("removes product from cart when remove button is clicked", async () => {
  const testStore = createTestStore()
  render(
    <Provider store={testStore}>
      <Product details={product} />
    </Provider>
  )
  
  // Add to cart first
  const addButton = screen.getByTestId(`add-to-cart-${product.id}`)
  fireEvent.click(addButton)
  
  // Verify item was added
  const quantityElement = screen.getByTestId(`quantity-${product.id}`)
  expect(quantityElement).toBeInTheDocument()
  
  // Verify quantity is 1
  expect(quantityElement).toHaveTextContent("1")
  
  // Remove from cart
  const removeButton = screen.getByTestId(`remove-from-cart-${product.id}`)
  fireEvent.click(removeButton)
  

  // expect(screen.queryByTestId(`quantity-${product.id}`)).not.toBeInTheDocument()

  // Wait for elements to be removed from the DOM
  await waitFor(() => {
    expect(screen.queryByTestId(`quantity-${product.id}`)).not.toBeInTheDocument()
  }, {
    timeout: 1000,
    interval: 100
  })
})