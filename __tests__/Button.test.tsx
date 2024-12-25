import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import Button from "@/components/Button"

test("renders the button with the correct text", () => {
  render(<Button>Click Me</Button>)
  const buttonElement = screen.getByText(/click me/i)
  expect(buttonElement).toBeInTheDocument()
})

test("calls the onClick handler when clicked", () => {
  const handleClick = jest.fn()
  render(<Button onClick={handleClick}>Click Me</Button>)
  const buttonElement = screen.getByText(/click me/i)
  fireEvent.click(buttonElement)
  expect(handleClick).toHaveBeenCalledTimes(1)
})
