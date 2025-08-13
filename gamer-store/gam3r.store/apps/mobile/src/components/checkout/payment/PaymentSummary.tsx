import { Ionicons } from '@expo/vector-icons'
import { Currency, Installment } from '@gstore/core'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import Colors from '@/src/data/constants/Colors'

export interface PaymentSummaryProps {
    itemsQty: number
    totalPrice: number
    fullTotalPrice: number
    installment: Installment
    completePurchase: () => void
    className?: string
}

export default function PaymentSummary(props: PaymentSummaryProps) {
    return (
        <View style={styles.container}>
            <View style={styles.itemsValue}>
                <Text style={{ color: 'white' }}>Valor total ({props.itemsQty} itens): </Text>
                <Text style={styles.highlightItemsValue}>{Currency.format(props.fullTotalPrice)}</Text>
            </View>
            <Pressable style={styles.button} onPress={() => props.completePurchase?.()}>
                <Ionicons name="cart-outline" size={22} style={styles.textButton} />
                <Text style={styles.textButton}>Finalizar Compra</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 20,
        paddingHorizontal: 60,
        paddingVertical: 20,
        backgroundColor: '#241440',
        borderRadius: 10,
        gap: 10,
    },
    itemsValue: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    highlightItemsValue: {
        color: '#34d399',
        fontWeight: 'bold',
    },
    button: {
        color: '#FFF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.PRIMARY,
        borderRadius: 9999,
        height: 40,
        paddingHorizontal: 45,
        gap: 8,
    },
    textButton: {
        color: '#FFF',
    },
})
