"use client"

import { ICartState } from "@/types/Cart"
import { useSelector } from "react-redux"
import { cartTotalValueSelector } from "@/store/cart"
import Image from "next/image"
import { loadStripe } from "@stripe/stripe-js"
import { useState } from "react"
import Input from "@/components/Input"
import Button from "@/components/Button"

const stripeLoadedPromise = loadStripe(
  "pk_test_51HsqkCGuhXEITAut89vmc4jtjYd7XPs8hWfo2XPef15MFqI8rCFc8NqQU9WutlUBsd8kmNqHBeEmSrdMMpeEEyfT00KzeVdate"
)

export default function CartPage() {
  const cart = useSelector((state: { cart: ICartState }) => state.cart)
  const cartTotalValue = cartTotalValueSelector(cart)

  const [email, setEmail] = useState("")

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const items = cart.items.map((item) => {
      return {
        price: item.price_id,
        quantity: item.quantity,
      }
    })
    stripeLoadedPromise.then((stripe) => {
      if (stripe) {
        stripe
          .redirectToCheckout({
            lineItems: items,
            mode: "payment",
            successUrl: "https://react-tutorial.app/app.html",
            cancelUrl: "https://react-tutorial.app/app.html",
            customerEmail: email,
          })
          .then((response) => {
            // this will only log if the redirect did not work
            console.log(response.error)
          })
          .catch((error) => {
            // wrong API key? you will see the error message here
            console.log(error)
          })
      } else {
        console.error("Stripe has not loaded.")
      }
    })
  }

  return (
    <div className="cart-layout">
      <div>
        <h1>Your Cart</h1>
        {cart.items.length === 0 && <p>You have not added any product to your cart yet.</p>}

        {cart.items.length > 0 && (
          <>
            <table className="table-cart table">
              <thead>
                <tr>
                  <th style={{ width: "25%" }} className="th-product">
                    Product
                  </th>
                  <th style={{ width: "20%" }}>Unit price</th>
                  <th style={{ width: "10%" }}>Quanity</th>
                  <th style={{ width: "25%" }}>Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.items.map((product) => {
                  return (
                    <tr key={product.id}>
                      <td>
                        <Image src={product.image} width="30" height="30" alt="" /> {product.name}
                      </td>
                      <td>${product.price}</td>
                      <td>{product.quantity}</td>
                      <td>
                        <strong>${product.price * product.quantity}</strong>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan={2}></th>
                  <th className="cart-highlight">Total</th>
                  <th className="cart-highlight">${cartTotalValue}</th>
                </tr>
              </tfoot>
            </table>
            <form action="" className="pay-form" onSubmit={handleFormSubmit}>
              <p>
                Enter your email and then click on pay and your products will be delivered to you on
                the same day!
              </p>
              <Input
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                type="email"
                required
              />
              <Button type="submit">Pay</Button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
