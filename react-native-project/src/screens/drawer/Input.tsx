import { View, StyleSheet, Text, TextInput, Alert, Pressable } from 'react-native'
import React, { useState } from 'react'

export default function Input() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const WhenClicked = () => {
        Alert.alert('Sent!', `Email: ${email}\nPassword: ${password}`)
        setEmail('')
        setPassword('')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Type your e-mail"
                placeholderTextColor="#888"
                value={email}
                onChangeText={(e) => setEmail(e.toLowerCase())}
                keyboardType="email-address"
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Inform your password"
                placeholderTextColor="#888"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Pressable style={styles.button} onPress={WhenClicked}>
                <Text style={styles.buttonText}>Click to send</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        textAlign: 'center',
        marginBottom: 5,
        fontSize: 16,
        color: '#000',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        width: '80%',
    },
    button: {
        backgroundColor: '#00BFFF',
        padding: 15,
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
})
