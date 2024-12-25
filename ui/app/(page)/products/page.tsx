"use client"

import Product from "@/components/Product"
import { IProduct } from "@/types/Product"
import { useEffect, useState } from "react"
import useFetch from "@/hooks/useFetch"
import Loader from "@/components/Loader"

export default function ProductsPage() {
  const [products, setProducts] = useState<IProduct[]>([])

  const { get, loading } = useFetch(process.env.NEXT_PUBLIC_API_URL || '')
  
  useEffect(() => {
    get("products")
      .then((data): void => {
        setProducts(data as IProduct[])
      })
      .catch((error) => {
        console.error("Error fetching products:", error)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="products-layout">
      <h1>Products</h1>
      <p>Take a look at our products</p>
      <div className="products-grid">
        {loading && <Loader />}
        {products.map((product) => {
          return <Product key={product.id} details={product} />
        })}
      </div>
    </div>
  )
}
