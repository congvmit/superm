import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import Input from "@/components/Input"

test("renders the input with the correct placeholder", () => {
  render(<Input placeholder="Enter text" />)
  const inputElement = screen.getByPlaceholderText(/Enter text/i)
  expect(inputElement).toBeInTheDocument()
})

test("calls the onChange handler when text is entered", () => {
  const handleChange = jest.fn()
  render(<Input placeholder="Enter text" onChange={handleChange} />)
  const inputElement = screen.getByPlaceholderText(/Enter text/i)
  fireEvent.change(inputElement, { target: { value: "Hello" } })
  expect(handleChange).toHaveBeenCalledTimes(1)
  expect((inputElement as HTMLInputElement).value).toBe("Hello")
})
