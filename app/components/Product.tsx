"use client"
import Button from "./Button"
import Image from "next/image"
import { IProduct } from "@/types/Product"
import Link from "next/link"
import { addProduct, removeProduct } from "@/store/cart"
import { useDispatch, useSelector } from "react-redux"
import { cartProductCountSelector } from "@/store/cart"
import { ICartState } from "@/types/Cart"

export default function Product(props: { details: IProduct }) {
  const { details } = props
  const dispatch = useDispatch()
  const cart = useSelector((state: { cart: ICartState }) => state.cart)
  const cartProductQuantity = cartProductCountSelector(cart, {
    id: details.id,
  })

  return (
    // Product Image
    <div className="product">
      <div className="product-image-container">
        <Link href={`/product/${details.id}`}>
          <Image
            src={details.image}
            width={100}
            height={100}
            className="product-image"
            alt={details.name}
            priority={true}
          />
          <div className="product-quantity-container">
            {cartProductQuantity > 0 && (
              <div 
                className="product-quantity"
                data-testid={`quantity-${details.id}`}
              >
                {cartProductQuantity}
              </div>
            )}
          </div>
        </Link>
      </div>

      <div className="product-info">
        <h3>{details.name}</h3>
        <p>{details.description}</p>
      </div>

      <div className="product-checkout">
        <div>
          {cartProductQuantity > 0 && (
            <Button
              outline
              className="product-delete"
              data-testid={`remove-from-cart-${details.id}`}
              onClick={() =>
                dispatch(
                  removeProduct({
                    id: details.id,
                    price_id: details.price_id,
                    name: details.name,
                    price: details.price,
                    image: details.image,
                  })
                )
              }
            >
              x
            </Button>
          )}
        </div>
        <Button
          outline
          data-testid={`add-to-cart-${details.id}`}
          onClick={() =>
            dispatch(
              addProduct({
                id: details.id,
                price_id: details.price_id,
                name: details.name,
                price: details.price,
                image: details.image,
              })
            )
          }
        >
          ${details.price}
        </Button>
      </div>
    </div>
  )
}
