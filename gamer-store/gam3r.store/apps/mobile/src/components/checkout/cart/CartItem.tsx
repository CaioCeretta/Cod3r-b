import { AntDesign, Ionicons } from '@expo/vector-icons'
import { Currency, ItemCart as ItemCartModel } from '@gstore/core'
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'

export interface ItemCartProps {
    item: ItemCartModel
    addItem: () => void
    removeItem: () => void
    removeProduct: () => void
}

export default function ItemCart(props: ItemCartProps) {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: props.item.product.image }}
                style={styles.image}
                alt="Product Image"
            />
            <View style={styles.productInfo}>
                <Text style={styles.name}>{props.item.product.name}</Text>
                <View style={styles.containerQuantity}>
                    <View style={styles.quantity}>
                        <Pressable
                            onPress={props.removeItem}
                            style={[styles.buttonQuantity, styles.buttonMinus]}
                        >
                            <AntDesign name="minus" size={16} color="#FFF" />
                        </Pressable>
                        <Text style={styles.quantityVal}>
                            {props.item.quantity}
                        </Text>
                        <Pressable
                            onPress={props.addItem}
                            style={[styles.buttonQuantity, styles.buttonPlus]}
                        >
                            <AntDesign name="plus" size={16} color="#FFF" />
                        </Pressable>
                    </View>
                    <Pressable
                        onPress={props.removeProduct}
                        style={styles.buttonDelete}
                    >
                        <Ionicons
                            name="trash-outline"
                            size={16}
                            color="#ff2777"
                        />
                        <Text style={{ color: '#ff2777' }}>Remover</Text>
                    </Pressable>
                </View>
                <View style={styles.containerPrice}>
                    <Text style={styles.fullPrice}>
                        De {Currency.format(props.item.product.basePrice)}
                    </Text>
                    <View style={{ flexDirection: 'row', gap: 4 }}>
                        <Text style={{ color: 'white' }}>Por</Text>
                        <Text style={styles.price}>
                            {Currency.format(
                                props.item.product.promotionalPrice,
                            )}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#241440',
        borderRadius: 8,
        padding: 16,
        marginVertical: 10,
        width: '95%',
        alignSelf: 'center',
    },
    checkboxContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        width: 30,
        height: 30,
        backgroundColor: '#333',
        borderRadius: 4,
    },
    image: {
        width: 120,
        height: 120,
        marginRight: 15,
    },
    productInfo: {
        flex: 1,
        justifyContent: 'space-between',
        gap: 6,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 5,
    },
    fullPrice: {
        fontSize: 10,
        color: '#AAA',
        textDecorationLine: 'line-through',
        marginBottom: 5,
    },
    containerPrice: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        gap: 4,
    },
    price: {
        fontSize: 14,
        color: '#FFF',
        fontWeight: 'bold',
    },
    containerQuantity: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    quantity: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#FFF',
        borderWidth: 1,
        borderRadius: 6,
    },
    buttonQuantity: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 25,
        height: 25,
        borderColor: '#FFF',
    },
    buttonMinus: {
        borderRightWidth: 1,
    },
    buttonPlus: {
        borderLeftWidth: 1,
    },
    buttonDelete: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    quantityVal: {
        marginHorizontal: 10,
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold',
    },
})
