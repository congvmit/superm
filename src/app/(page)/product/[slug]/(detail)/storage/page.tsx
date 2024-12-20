"use client";

import { useOutletContext } from "@/app/context/OutletContext";
import { IProductDetails } from "@/app/types/ProductDetails";

export default function ProductDetailStorage() {
  const product = useOutletContext() as IProductDetails;
  const storage = product.storage;

  return (
    <p>
      <strong>Storage instructions:</strong> {storage}
    </p>
  );
}
