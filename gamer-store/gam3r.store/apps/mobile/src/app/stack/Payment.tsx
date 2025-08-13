import { StyleSheet, SafeAreaView, Text, ScrollView } from 'react-native'
import CheckoutHeader from '@/src/components/checkout/CheckoutHeader'
import DeliveryForm from '@/src/components/checkout/payment/DeliveryForm'
import PaymentSummary from '@/src/components/checkout/payment/PaymentSummary'
import SelectPaymentMethod from '@/src/components/checkout/payment/SelectPaymentMethod'
import useCart from '@/src/data/hooks/useCart'
import usePayment from '@/src/data/hooks/usePayment'

export default function Payment() {
    const { installment, itemsQty, totalPrice, fullTotalPrice } = useCart()
    const { delivery, paymentMethod, updateDelivery, updatePaymentMethod, completePurchase } =
        usePayment()

    return (
        <SafeAreaView style={styles.container}>
            <CheckoutHeader step="payment" />
            <ScrollView contentContainerStyle={styles.containerScroll}>
                <Text style={styles.title}>Forma de Pagamento</Text>
                <SelectPaymentMethod
                    paymentMethod={paymentMethod}
                    paymentMethodChanged={updatePaymentMethod}
                />

                <Text style={styles.title}>Dados da Entrega</Text>
                <DeliveryForm delivery={delivery} deliveryChanged={updateDelivery} />
            </ScrollView>

            <PaymentSummary
                itemsQty={itemsQty}
                totalPrice={totalPrice}
                fullTotalPrice={fullTotalPrice}
                installment={installment}
                completePurchase={completePurchase}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0E001D',
    },
    containerScroll: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
    },
})
