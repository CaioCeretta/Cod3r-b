import { View, Text, StyleSheet, Pressable } from 'react-native'

export default function Tab2({ navigation }: any) {
    return (
        <View style={styles.view}>
            <Text style={styles.primaryText}>Click to go to tab 3:</Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Tab3')}>
                <Text style={styles.buttonText}>Click</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    primaryText: {
        textAlign: 'center',
        fontSize: 16,
        paddingBottom: 15,
        marginTop: 50,
    },
    button: {
        backgroundColor: '#201090',
        padding: 15,
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
})
