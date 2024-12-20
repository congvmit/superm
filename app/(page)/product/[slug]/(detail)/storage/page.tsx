"use client";

import { useOutletContext } from "@/context/OutletContext";
import { IProductDetails } from "@/types/ProductDetails";

export default function ProductDetailStorage() {
  const product = useOutletContext() as IProductDetails;
  const storage = product.storage;

  return (
    <p>
      <strong>Storage instructions:</strong> {storage}
    </p>
  );
}
