import { View, StyleSheet, Text, Image as ImageC } from 'react-native'

export default function Image() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Imagem local</Text>
      <ImageC
        source={require('../../../assets/images/react-logo.png')}
        style={styles.image}
      />
      <Text style={styles.label}>Imagem online</Text>
      <ImageC
        source={{ uri: 'https://dummyimage.com/300x200/000/fff' }}
        style={styles.image}
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
  label: {
    textAlign: 'center',
    fontSize: 16,
    padding: 5,
  },
  image: {
    width: 200,
    height: 200,
  },
})
