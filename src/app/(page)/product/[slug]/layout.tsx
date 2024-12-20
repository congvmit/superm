"use client";

import { IProductDetails } from "@/app/types/ProductDetails";
import { useEffect, useState } from "react";
import useFetch from "@/app/hooks/useFetch";
import { useParams } from "next/navigation";
import { OutletProvider } from "@/app/context/OutletContext";
import { ReactNode } from "react";

export default function ProductPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Ref: https://nextjs.org/docs/app/api-reference/functions/use-params
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const [product, setProduct] = useState<IProductDetails>({});

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { get, loading } = useFetch(
    "https://react-tutorial-demo.firebaseio.com/",
  );

  useEffect(() => {
    get(`productinfo/id${slug}.json`)
      .then((data): void => {
        setProduct(data as IProductDetails);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <OutletProvider value={product as IProductDetails}>
      {children}
    </OutletProvider>
  );
}
