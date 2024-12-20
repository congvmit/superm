"use client";

import { IProductDetails } from "@/app/types/ProductDetails";
import Image from "next/image";
import { useParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { useOutletContext } from "@/app/context/OutletContext";
import Link from "next/link";

import { ReactNode } from "react";

export default function ProductDetailTableLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const product = useOutletContext() as IProductDetails;
  // Ref: https://nextjs.org/docs/app/api-reference/functions/use-params
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  return (
    <>
      <div className="product-details-layout">
        <div>
          <h2>{product.name}</h2>
          <Image
            width={125}
            height={125}
            className="product-details-image"
            alt="product name here"
            src={product.image || "/default-image.png"}
            priority={true}
          />
        </div>
        <div>
          <div className="tabs">
            <ul>
              <li>
                <Link
                  href={`/product/${slug}`}
                  className={pathname == `/product/${slug}` ? "tab-active" : ""}
                >
                  Details
                </Link>
              </li>
              <li>
                <Link
                  href={`/product/${slug}/nutrition`}
                  className={
                    pathname == `/product/${slug}/nutrition` ? "tab-active" : ""
                  }
                >
                  Nutrition
                </Link>
              </li>
              <li>
                <Link
                  href={`/product/${slug}/storage`}
                  className={
                    pathname == `/product/${slug}/storage` ? "tab-active" : ""
                  }
                >
                  Storage
                </Link>
              </li>
            </ul>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
