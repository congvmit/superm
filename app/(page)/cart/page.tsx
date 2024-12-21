"use client";

import { ICartState } from "@/types/Cart";
import { useSelector } from "react-redux";
import { cartTotalValueSelector } from "@/store/cart";
import Image from "next/image";

export default function CartPage() {
  const cart = useSelector((state: { cart: ICartState }) => state.cart);
  const cartTotalValue = cartTotalValueSelector(cart);

  return (
    <div className="cart-layout">
      <div>
        <h1>Your Cart</h1>
        {cart.items.length === 0 && (
          <p>You have not added any product to your cart yet.</p>
        )}

        {cart.items.length > 0 && (
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
                      <Image
                        src={product.image}
                        width="30"
                        height="30"
                        alt=""
                      />{" "}
                      {product.name}
                    </td>
                    <td>${product.price}</td>
                    <td>{product.quantity}</td>
                    <td>
                      <strong>${product.price * product.quantity}</strong>
                    </td>
                  </tr>
                );
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
        )}
      </div>
    </div>
  );
}
