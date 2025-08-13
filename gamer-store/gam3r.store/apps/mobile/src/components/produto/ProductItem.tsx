import Colors from '@/src/data/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { Currency, Product } from '@gstore/core'
import { LinearGradient } from 'expo-linear-gradient'
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import useCart from '@/src/data/hooks/useCart'
import usePayment from '@/src/data/hooks/usePayment'
import ReviewRating from '../shared/ReviewRating'
import useInstallment from '@/src/data/hooks/useInstallment'
import React from 'react'

export interface ProductItemProps {
    product: Product
    selectedProduct?: (product: Product) => void
}

export default function ProductItem(props: ProductItemProps) {
    const { addItem } = useCart()
    const installment = useInstallment(props.product.promotionalPrice)

    return (
        <View style={styles.container}>
            <Pressable
                style={styles.produto}
                onPress={() => props.selectedProduct?.(props.product)}
            >
                <Image src={props.product.image} style={styles.image} alt="Imagem do Produto" />
                <View style={{ flex: 1 }}>
                    <View style={styles.reviewContainer}>
                        <ReviewRating rating={props.product.rating} />
                    </View>
                    <Text style={styles.name}>{props.product.name}</Text>
                    <Text style={styles.fullPrice}>
                        de {Currency.format(props.product.basePrice)}
                    </Text>
                    <View style={styles.precoContainer}>
                        <Text style={{ color: 'white' }}>por</Text>
                        <Text style={styles.price}>
                            {Currency.format(props.product.promotionalPrice)}
                        </Text>
                    </View>
                    <Text style={styles.installment}>
                        ou {installment.installmentsQty}x de{' '}
                        {Currency.format(installment.installmentPrice)}
                    </Text>
                </View>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={(e) => {
                    e.preventDefault()
                    addItem(props.product)
                }}
            >
                <Ionicons name="cart-outline" size={22} style={styles.buttonText} />
                <Text style={styles.buttonText}>Adicionar</Text>
            </Pressable>
            <LinearGradient
                colors={['transparent', '#7811F5', 'transparent']}
                start={{ x: 0, y: 0.75 }}
                end={{ x: 1, y: 0.25 }}
                style={styles.inferiorButton}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        maxWidth: Dimensions.get('window').width,
    },
    produto: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 150,
    },
    reviewContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
    },
    fullPrice: {
        fontSize: 14,
        color: '#AAA',
        textDecorationLine: 'line-through',
    },
    precoContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        gap: 4,
    },
    price: {
        fontSize: 24,
        color: '#34d399',
        fontWeight: 'bold',
    },
    installment: {
        fontSize: 14,
        color: '#FFF',
    },
    button: {
        color: '#FFF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.PRIMARY,
        alignSelf: 'center',
        borderRadius: 9999,
        height: 40,
        paddingHorizontal: 80,
        gap: 8,
    },
    buttonText: {
        color: '#FFF',
    },
    inferiorButton: {
        marginTop: 20,
        height: 2,
        width: Dimensions.get('window').width,
    },
})
