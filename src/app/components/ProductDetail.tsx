"use client";
import Button from "./Button";
import Image from "next/image";


export default function ProductDetail(props: { details: TProduct }) {
  const { details } = props;
  return (
    // Product Image
    <div className="product">
      <div className="product-image-container">
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
