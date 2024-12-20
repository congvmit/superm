"use client";
import Button from "./Button";
import Image from "next/image";
import { IProduct } from "@/app/types/Product";
import Link from "next/link";

export default function Product(props: { details: IProduct }) {
  const { details } = props;
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
            <div className="product-quantity">0</div>
          </div>
        </Link>
      </div>

      <div className="product-info">
        <h3>{details.name}</h3>
        <p>{details.description}</p>
      </div>

      <div className="product-checkout">
        <div>
          <Button outline className="product-delete">
            x
          </Button>
        </div>
        <Button outline>${details.price}</Button>
      </div>
    </div>
  );
}
