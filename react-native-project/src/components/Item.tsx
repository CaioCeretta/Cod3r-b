import { View, StyleSheet, Text, Image } from 'react-native'

export interface ItemProps {
    main: string
    secondary: string
}

export default function Item(props: ItemProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.primary}>{props.main}</Text>
            <Text style={styles.secondary}>{props.secondary}</Text>
            <Image
                source={{ uri: 'https://dummyimage.com/300x200/000/fff' }}
                style={styles.remoteImage}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    primary: {
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 10,
        fontWeight: 'bold',
    },
    secondary: {
        textAlign: 'center',
        fontSize: 20,
        paddingBottom: 10,
        color: '#777',
        fontStyle: 'italic',
    },
    remoteImage: {
        width: 300,
        height: 200,
        marginBottom: 30,
    },
})
