import React from 'react'
import { View, StyleSheet, Pressable as PressableC, Text, Image } from 'react-native'

export default function Pressable() {
    const whenPress = () => {
        alert('Button Fired!')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.primary}>Botão comum:</Text>
            <PressableC style={styles.button} onPress={whenPress}>
                <Text style={styles.buttonText}>Clique</Text>
            </PressableC>
            <Text style={styles.primary}>Botão em imagem:</Text>
            <PressableC onPress={whenPress}>
                <Image
                    source={require('../../../assets/images/react-logo.png')}
                    style={styles.localImage}
                />
            </PressableC>
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
        fontSize: 16,
        paddingBottom: 15,
        marginTop: 50,
    },
    button: {
        backgroundColor: '#FF0000',
        padding: 15,
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    localImage: {
        width: 200,
        height: 200,
    },
})
