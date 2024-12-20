"use client";

import Button from "@/app/components/Button";
import { useOutletContext } from "@/app/context/OutletContext";
import { IProductDetails } from "@/app/types/ProductDetails";

export default function ProductDetailInfo() {
  const product = useOutletContext() as IProductDetails;

  return (
    <>
      <p>
        {product.description} sold at <strong>${product.price}</strong> per
        piece.
      </p>
      <Button>${product.price}</Button>
    </>
  );
}
