'use client'

import CheckoutHeader from '@/components/checkout/CabecalhoCheckout'
import DeliveryForm from '@/components/checkout/payment/DeliveryForm'
import PaymentSummary from '@/components/checkout/payment/PaymentSummary'
import PaymentFormSelection from '@/components/checkout/payment/SelectionPaymentForm'
import useCart from '@/data/hooks/useCart'
import usePayment from '@/data/hooks/usePayment'

export default function Page() {
  const { installments, itemsQty, totalPrice, fullTotalPrice } = useCart()
  const { delivery, paymentMethod, updateDelivery, updatePaymentMethod, completePurchase } =
    usePayment()

  return (
    <div className="flex flex-col gap-7 container">
      <CheckoutHeader step="payment" />
      <div className="flex gap-5">
        <div className="flex-1 flex flex-col gap-5">
          <PaymentFormSelection
            paymentMethod={paymentMethod}
            paymentMethodChanged={updatePaymentMethod}
          />
          <DeliveryForm delivery={delivery} deliveryChanged={updateDelivery} />
        </div>
        <PaymentSummary
          itemsQty={itemsQty}
          totalPrice={totalPrice}
          fullTotalPrice={fullTotalPrice}
          installment={installments}
          completePurchase={completePurchase}
          className="mt-12"
        />
      </div>
    </div>
  )
}
