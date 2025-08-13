import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import Specifications from '@/src/components/produto/Specifications'
import PurchaseBanner from '@/src/components/produto/PurchaseBanner'
import COLORS from '@/src/data/constants/Colors'
import PriceMeasurer from '@/src/components/produto/PriceMeasurer'
import UsersRatings from '@/src/components/produto/UsersRating'
import React from 'react'


export default function ProductDetails(props: any) {
    const { product } = props.route.params
    if (!product) return null

    return (
        <ScrollView style={styles.container}>
            <View style={styles.produtoInfo}>
                <Text style={styles.titulo}>{product.nome}</Text>
                <View style={styles.imageBackground}>
                    <Image src={product.images} style={styles.image} />
                </View>
                <Specifications product={product} />
            </View>
            <PurchaseBanner product={product} />
            <PriceMeasurer product={product} />
            <UsersRatings product={product} />
            <View style={{ height: 50 }} />
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        gap: 10,
        backgroundColor: COLORS.BG_PRIMARY,
    },
    produtoInfo: {
        backgroundColor: COLORS.BG_SECONDARY,
        padding: 20,
        gap: 20,
    },
    titulo: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
    },
    imageBackground: {
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: 10,
        padding: 20,
        height: 230,
    },
    image: {
        width: '80%',
        height: '100%',
        borderRadius: 10,
    },
})
