import useProducts from '@/src/data/hooks/useProducts'
import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import ProductItem from '../../components/produto/ProductItem'

export default function Initial({ navigation }: any) {
    const { products } = useProducts()
    console.log(products)

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingVertical: 20, width: '100%' }}>
                {products.map((product) => (
                    <ProductItem
                        key={product.id}
                        product={product}
                        selectedProduct={() => {
                            navigation.navigate('ProdutoDetalhes', { product })
                        }}
                    />
                ))}
            </ScrollView>
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
})
