import { DeliveryOrder } from '@gstore/core'
import { TextInput, StyleSheet, View } from 'react-native'
import React from 'react'

export interface DeliveryFormProps {
    delivery: Partial<DeliveryOrder>
    deliveryChanged: (delivery: Partial<DeliveryOrder>) => void
    className?: string
}

export default function DeliveryForm(props: DeliveryFormProps) {
    const { delivery, deliveryChanged } = props

    function updateAttribute(attribute: string) {
        return (valor: any) => {
            deliveryChanged({ ...delivery, [attribute]: valor })
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nome Completo"
                value={delivery.name}
                onChangeText={updateAttribute('nome')}
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                value={delivery.email}
                onChangeText={updateAttribute('email')}
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="CPF"
                value={delivery.cpf}
                onChangeText={updateAttribute('cpf')}
                keyboardType="numeric"
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="Logradouro"
                value={delivery.logradouro}
                onChangeText={updateAttribute('logradouro')}
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="Complemento"
                value={delivery.complemento}
                onChangeText={updateAttribute('complemento')}
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="Cidade"
                value={delivery.city}
                onChangeText={updateAttribute('cidade')}
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="Estado"
                value={delivery.state}
                onChangeText={updateAttribute('estado')}
                placeholderTextColor="#999"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#fff',
    },
    input: {
        height: 40,
        width: 300,
        color: '#fff',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#241440',
    },
})
