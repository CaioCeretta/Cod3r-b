'use client'
import {
    OrderItem,
    Order,
    DeliveryOrder,
    Status,
    PaymentMethod,
    ItemCart
} from '@gstore/core'
import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import useLocalStorage from '../hooks/useLocalStorage'
import useCart from '../hooks/useCart'
import useAPI from '../hooks/useAPI'

export interface PaymentContextProps {
    paymentMethod: PaymentMethod
    delivery: Partial<DeliveryOrder>
    updatePaymentMethod: (paymentMethod: PaymentMethod) => void
    updateDelivery: (entrega: Partial<DeliveryOrder>) => void
    completePurchase: () => void
}

const PaymentContext = createContext<PaymentContextProps>({} as any)

export function PaymentProvider(props: any) {
    const { httpPost } = useAPI()
    const { items, totalPrice, clearCart } = useCart()
    const { saveItem, fetchItem } = useLocalStorage()
    const router = useRouter()

    const [paymentMethod, setpaymentMethod] = useState<PaymentMethod>(
        PaymentMethod.PIX,
    )
    const [delivery, setDelivery] = useState<Partial<DeliveryOrder>>({})

    function updatePaymentMethod(paymentMethod: PaymentMethod) {
        saveItem('paymentMethod', paymentMethod)
        setpaymentMethod(paymentMethod)
    }

    function updateDelivery(entrega: Partial<DeliveryOrder>) {
        saveItem('delivery', entrega)
        setDelivery(entrega)
    }

    async function completePurchase() {
        const pedido: Partial<Order> = {
            date: new Date(),
            paymentMethod,
            totalPrice,
            delivery: delivery as DeliveryOrder,
            status: Status.RECEIVED,
            items: items.map(
                (item: ItemCart) =>
                    ({
                        product: item.product,
                        quantity: item.quantity,
                        unitPrice: item.product.promotionalPrice,
                    }) as OrderItem,
            ),
        }

        await httpPost('/pedidos', pedido)
        clearCart()
        router.push('/checkout/success')
    }

    useEffect(() => {
        const entrega = fetchItem('entrega')
        const paymentMethod = fetchItem('paymentMethod')
        if (entrega) setDelivery(entrega)
        if (paymentMethod) setpaymentMethod(paymentMethod)
    }, [fetchItem])

    return (
        <PaymentContext.Provider
            value={{
                delivery,
                paymentMethod,
                updateDelivery,
                updatePaymentMethod,
                completePurchase,
            }}
        >
            {props.children}
        </PaymentContext.Provider>
    )
}

export default PaymentContext
