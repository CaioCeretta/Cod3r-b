'use client'

import { Currency, Product } from "@gstore/core"
import { IconShoppingCartPlus } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"
import RatingReviews from "../shared/RatingReview"
import useInstallments from "@/data/hooks/useInstallments"
import useCart from "@/data/hooks/useCart"

export interface ProductItemProps {
  product: Product
}


export default function ProductItem(props: ProductItemProps) {
  const { product } = props
  const { addItem } = useCart()
  const installments = useInstallments(props.product.promotionalPrice)

  return (
    <Link
      href={`/product/${product.id}`}
      className="flex flex-col bg-violet-dark border border-white/10 rounded-xl relative max-w-[350px]"
    >
      <div className="absolute flex justify-end top-2 5 right-2 5">
        <RatingReviews rating={product.rating} size={12}/>
      </div>
      <div className="w-full h-48 relative">
        <Image
          src={product.image}
          fill
          className="object-contain"
          alt="Product Image"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5 border-t border-white/10">
        <span className="text-lg font-semibold">{product.name}</span>
        <div className="self-start text-sm border-b border-dashed">
          {product.specifications.highlight}
        </div>
        <div className="flex-1"> 
          {/* This flex 1 is a trick we can use on flex containers for the container occupy the whole height and will take
          the button to the bottom, aligned with the others */}
          <div className="flex flex-col">
            <span className="text-sm text-gray-400 line-through">
              from {Currency.format(product.basePrice)}
            </span>
            <span className="text-xl font-semibold text-emerald-500">
              for {Currency.format(product.promotionalPrice)}
            </span>
            <span className="text-zinc-400 text-xs">
          installments of {installments.installmentsQty}x of 
          {Currency.format(installments.installmentPrice)}
        </span>
          </div>
        </div>
        <button
          className="flex justify-center items-center gap-2 h-8 bg-violet-700
        hover:border-2 border-emerald-500"
          onClick={(e) => {
            e.preventDefault();
            addItem(product)
          }}
        >
          <IconShoppingCartPlus size={20} />
          <span>Add</span>
        </button>
      </div>

    </Link>
  )

}
