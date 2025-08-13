import {
    PaymentMethod,
    OrderItem,
    Order,
    DeliveryOrder,
    Status,
} from '@gstore/core'
import { createContext, useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import useCart from '../hooks/useCart'
import useAPI from '../hooks/useAPI'

export interface PaymentContextProps {
    paymentMethod: PaymentMethod
    delivery: Partial<DeliveryOrder>
    updatePaymentMethod: (paymentMethod: PaymentMethod) => void
    updateDelivery: (delivery: Partial<DeliveryOrder>) => void
    completePurchase: () => void
}

const PaymentContext = createContext<PaymentContextProps>({} as any)

export function PaymentProvider(props: any) {
    const { httpPost } = useAPI()
    const { items, totalPrice, clearCart } = useCart()
    const { saveItem, getItem } = useLocalStorage()

    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(
        PaymentMethod.PIX,
    )
    const [delivery, setDelivery] = useState<Partial<DeliveryOrder>>({})

    function updatePaymentMethod(paymentMethod: PaymentMethod) {
        saveItem('paymentMethod', paymentMethod)
        setPaymentMethod(paymentMethod)
    }

    function updateDelivery(delivery: Partial<DeliveryOrder>) {
        saveItem('delivery', delivery)
        setDelivery(delivery)
    }

    async function completePurchase() {
        const order: Partial<Order> = {
            date: new Date(),
            paymentMethod,
            totalPrice,
            delivery: delivery as DeliveryOrder,
            status: Status.RECEIVED,
            items: items.map(
                (item) =>
                    ({
                        product: item.product,
                        quantity: item.quantity,
                        unitPrice: item.product.promotionalPrice,
                    }) as OrderItem,
            ),
        }

        await httpPost('/orders', order)
        clearCart()
    }

    useEffect(() => {
        getItem('delivery').then((delivery) => {
            setDelivery(delivery ?? {})
        })
        getItem('pagamento').then((formaPagamento) => {
            setPaymentMethod(formaPagamento ?? PaymentMethod.CARD)
        })
    }, [getItem])

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
