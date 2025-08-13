import { Ionicons } from '@expo/vector-icons'
import { Currency, Product } from '@gstore/core'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import Colors from '@/src/data/constants/Colors'
import useCart from '../../data/hooks/useCart'
import useInstallment from '../../data/hooks/useInstallment'

export interface PurchaseBannerProps {
    product: Product
}

export default function PurchaseBanner(props: PurchaseBannerProps) {
    const { product } = props
    const { addItem } = useCart()
    const installment = useInstallment(product.promotionalPrice)

    return (
        <View style={styles.container}>
            <View style={styles.containerPreco}>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        borderRightWidth: 3,
                        borderRightColor: Colors.PRIMARY,
                    }}
                >
                    <Text style={styles.valorCheio}>
                        de R$ {product?.basePrice}
                    </Text>
                    <View style={styles.precoPromocional}>
                        <Text style={styles.valor}>por</Text>
                        <Text style={styles.priceHighlight}>
                            {Currency.format(product?.promotionalPrice)}
                        </Text>
                    </View>
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={styles.valor}>
                        até {installment.installmentsQty}x de
                    </Text>
                    <Text style={styles.valor}>
                        {Currency.format(installment.installmentPrice)}
                    </Text>
                </View>
            </View>
            <View style={{ gap: 10 }}>
                <Pressable
                    onPress={() => addItem(product)}
                    style={{ ...styles.button, backgroundColor:Colors.PRIMARY }}
                >
                    <Ionicons
                        style={styles.buttonText}
                        name="cart-outline"
                        size={20}
                    />
                    <Text style={styles.buttonText}>Adicionar</Text>
                </Pressable>
                <Pressable
                    onPress={() => {}}
                    style={{
                        ...styles.button,
                        backgroundColor: Colors.SECONDARY,
                    }}
                >
                    <Ionicons
                        style={styles.buttonText}
                        name="card-outline"
                        size={20}
                    />
                    <Text style={styles.buttonText}>Comprar</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        gap: 30,
    },
    containerPreco: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    valorCheio: {
        textDecorationLine: 'line-through',
        color: '#C4C4C4',
    },
    precoPromocional: {
        flexDirection: 'row',
        alignItems: 'baseline',
        gap: 8,
    },
    valor: {
        fontSize: 16,
        color: 'white',
    },
    priceHighlight: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.HIGHLIGHT_TEXT_1,
    },
    button: {
        color: '#FFF',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 9999,
        height: 35,
        paddingHorizontal: 80,
        gap: 8,
    },
    buttonText: {
        color: '#FFF',
    },
})
