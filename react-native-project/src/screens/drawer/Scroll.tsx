import Item from '@/src/components/Item'
import { StyleSheet, ScrollView } from 'react-native'

export default function Scroll() {
    return (
        <ScrollView>
            <Item main="Item 1" secondary="Descrição do item 1" />
            <Item main="Item 2" secondary="Descrição do item 2" />
            <Item main="Item 3" secondary="Descrição do item 3" />
            <Item main="Item 4" secondary="Descrição do item 4" />
            <Item main="Item 5" secondary="Descrição do item 5" />
            <Item main="Item 6" secondary="Descrição do item 6" />
            <Item main="Item 7" secondary="Descrição do item 7" />
            <Item main="Item 8" secondary="Descrição do item 8" />
        </ScrollView>
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
