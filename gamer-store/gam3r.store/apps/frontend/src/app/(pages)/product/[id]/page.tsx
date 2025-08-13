import PurchaseBanner from "@/components/product/PurchaseBanner"
import PriceMeasurer from "@/components/product/PriceMeasurer"
import ProductDetails from "@/components/product/ProductDetails"
import ProductNotFound from "@/components/product/ProductNotFound"
import ProductTitle from "@/components/product/ProductTitle"
import SpecializedReview from "@/components/product/SpecializedReview"
import UsersRatings from "@/components/product/UsersRatings"
import { products } from "@gstore/core"

export default function ProductPage(props: any) {
  const id = +props.params.id

  const product = products.find(product => product.id === id)


  return product ? (
    <div className="flex flex-col gap-20 container py-10">
      <div className="flex flex-col gap-10">
        <ProductTitle product={product} />
        <ProductDetails product={product}/>
        <PurchaseBanner product={product}/>
        <PriceMeasurer product={product}/>
      </div>
      <UsersRatings product={product} />
      <SpecializedReview product={product} />
    </div>
  ) : (
    <ProductNotFound />
  )
}