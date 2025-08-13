import { View, StyleSheet, Button as ButtonC } from 'react-native'

export default function Button() {
    const whenClick = () => {
        alert('Button Fired!')
    }

    return (
        <View style={styles.container}>
            <ButtonC title="Click" onPress={whenClick} color="#ff0000" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
