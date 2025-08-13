'use client'
import CheckoutHeader from "@/components/checkout/CabecalhoCheckout"
import CartItem from "@/components/checkout/cart/CartItem"


import EmptyCart from "@/components/checkout/cart/EmptyCart"
import TotalCart from "@/components/checkout/cart/TotalCart"
import useCart from "@/data/hooks/useCart"

export default function Page() {
  const {
    items,
    itemsQty,
    totalPrice,
    addItem,
    removeItem,
    removeProduct
  } = useCart()

  return (
    <div className="flex flex-col gap-5 container">
      <CheckoutHeader step="cart" />
      <div className="flex flex-col gap-4">
        {items.length === 0 && <EmptyCart />}
        {items.map((item: any) => (
          <CartItem
            key={item.product.id}
            item={item}
            addItem={() => addItem(item.product)}
            removeItem={() => removeItem(item.product)}
            removeProduct={() => removeProduct(item.product)}
          />
        ))}
      </div>
      <TotalCart itemsQty={itemsQty} totalPrice={totalPrice} />
    </div>
  )
}