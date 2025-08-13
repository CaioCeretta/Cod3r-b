import {
    CalculateInstallment,
    Cart,
    Installment,
    ItemCart,
    Product,
} from '@gstore/core'
import { createContext, useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export interface CartContextProps {
    items: ItemCart[]
    itemsQty: number
    fullTotalPrice: number
    totalPrice: number
    installment: Installment
    addItem: (product: Product) => void
    removeItem: (product: Product) => void
    removeProduct: (product: Product) => void
    clearCart: () => void
}

export const CartContext = createContext<CartContextProps>({} as any)

export function CartProvider(props: any) {
    const { saveItem, getItem } = useLocalStorage()
    const [cart, setCart] = useState<Cart>(new Cart())

    function addItem(product: Product) {
        updateCart(cart.addItem(product))
    }

    function removeItem(product: Product) {
        updateCart(cart.removeItem(product))
    }

    function removeProduct(product: Product) {
        updateCart(cart.removeProduct(product))
    }

    function clearCart() {
        updateCart(cart.clear())
    }

    function updateCart(cart: Cart) {
        saveItem('cart', cart.items)
        setCart(cart)
    }

    useEffect(() => {
        getItem('cart').then((itensSalvos: ItemCart[]) => {
            if (itensSalvos) setCart(new Cart(itensSalvos))
        })
    }, [getItem])

    return (
        <CartContext.Provider
            value={{
                items: cart.items,
                itemsQty: cart.itemsQty,
                totalPrice: cart.totalPrice,
                fullTotalPrice: cart.fullPrice,
                installment: new CalculateInstallment().execute(
                    cart.fullPrice,
                ),
                addItem,
                removeItem,
                removeProduct,
                clearCart,
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
