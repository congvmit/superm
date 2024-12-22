"use client"

import Button from "@/components/Button"
import { useOutletContext } from "@/context/OutletContext"
import { IProductDetails } from "@/types/ProductDetails"

export default function ProductDetailInfo() {
  const product = useOutletContext() as IProductDetails

  return (
    <>
      <p>
        {product.description} sold at <strong>${product.price}</strong> per piece.
      </p>
      <Button>${product.price}</Button>
    </>
  )
}
