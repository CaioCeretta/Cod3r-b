'use client'

import ProductItem from "./ProductItem"
import ProductNotFound from "./ProductNotFound"
import useProducts from "@/data/hooks/useProdutos"

export default function ProductList() {
  const { products} = useProducts()

  return products.length ? (
    <div className="flex-1 grid grid-col-1 sm:grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4"
    >

      {products.map(product => (
        <ProductItem product={product} key={product.id} />
      ))}


    </div>
  ) : (
    <ProductNotFound noReturnButton />
  )
}