import CarrinhoVazio from '@/src/components/checkout/cart/CarrinhoVazio'
import CartItem from '@/src/components/checkout/cart/CartItem'
import CheckoutHeader from '@/src/components/checkout/CheckoutHeader'
import COLORS from '@/src/data/constants/Colors'
import useCart from '@/src/data/hooks/useCart'
import { Ionicons } from '@expo/vector-icons'
import { ItemCart } from '@gstore/core'
import React from 'react'
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native'

export default function Cart({ navigation }: any) {
    const { items, itemsQty, addItem, removeItem, removeProduct } = useCart()

    return (
        <SafeAreaView style={styles.container}>
            <CheckoutHeader step="cart" />
            <ScrollView contentContainerStyle={{ paddingVertical: 20, width: '100%' }}>
                {items.length === 0 && <CarrinhoVazio />}
                {items.map((item: ItemCart) => (
                    <CartItem
                        key={item.product.id}
                        item={item}
                        addItem={() => addItem(item.product)}
                        removeItem={() => removeItem(item.product)}
                        removeProduct={() => removeProduct(item.product)}
                    />
                ))}
            </ScrollView>
            {itemsQty > 0 && (
                <Pressable
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('Pagamento')
                    }}
                >
                    <Ionicons name="card-outline" size={22} style={styles.buttonText} />
                    <Text style={styles.buttonText}>Continuar</Text>
                </Pressable>
            )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0E001D',
        width: '100%',
    },
    button: {
        color: '#FFF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.PRIMARY,
        alignSelf: 'center',
        borderRadius: 9999,
        height: 40,
        marginVertical: 20,
        paddingHorizontal: 50,
        gap: 8,
    },
    buttonText: {
        color: '#FFF',
    },
})
