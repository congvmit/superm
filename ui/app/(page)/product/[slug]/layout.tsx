"use client"

import { IProductDetails } from "@/types/ProductDetails"
import { useEffect, useState } from "react"
import useFetch from "@/hooks/useFetch"
import { useParams } from "next/navigation"
import { OutletProvider } from "@/context/OutletContext"
import { ReactNode } from "react"

export default function ProductPageLayout({ children }: { children: ReactNode }) {
  // Ref: https://nextjs.org/docs/app/api-reference/functions/use-params
  const params = useParams<{ slug: string }>()
  const slug = params.slug
  const [product, setProduct] = useState<IProductDetails>({})

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { get, loading } = useFetch(process.env.NEXT_PUBLIC_API_URL || '')

  useEffect(() => {
    get(`products/${slug}`)
      .then((data): void => {
        setProduct(data as IProductDetails)
        console.log(data)
      })
      .catch((error) => {
        console.error("Error fetching products:", error)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <OutletProvider value={product as IProductDetails}>{children}</OutletProvider>
}
