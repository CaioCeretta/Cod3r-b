import { PaymentMethod } from '@gstore/core'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export interface SelectPaymentMethodProps {
    paymentMethod?: PaymentMethod
    paymentMethodChanged?: (value: PaymentMethod) => void
    className?: string
}

export default function SelectPaymentMethod(
    props: SelectPaymentMethodProps,
) {
    function renderItem(label: string, paymentMethod: PaymentMethod) {
        const selected = props.paymentMethod === paymentMethod
        return (
            <Pressable
                key={paymentMethod}
                style={styles.optionContainer}
                onPress={() => props.paymentMethodChanged?.(paymentMethod)}
            >
                <View style={styles.optionSelector}>
                    {selected && <View style={styles.selection} />}
                </View>
                <Text style={styles.texto}>{label}</Text>
            </Pressable>
        )
    }

    return (
        <View style={styles.container}>
            {renderItem('Payment on PIX', PaymentMethod.PIX)}
            {renderItem('Bank Slip', PaymentMethod.BANK_SLIP)}
            {renderItem('Credit Card', PaymentMethod.CARD)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    optionSelector: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#8247E5',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    selection: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#8247E5',
    },
    texto: {
        fontSize: 16,
        color: '#FFF',
    },
})
