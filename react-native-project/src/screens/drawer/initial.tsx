import { Text, View, StyleSheet, Image } from 'react-native'
import React, { Component } from 'react'

export default class Initial extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/react-logo.png')}
        />
        <Text style={styles.title}>React Native Essential</Text>
        <Text style={styles.help}>Use the Drawer Navigation on the top-left corner of the screen to navigate!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: '300'
  },
  help: {
    fontSize: 14,
    color: '#666',
    textAlign: "center",
    paddingHorizontal: 30
  },
  image: {
    width: 200,
    height: 200,
  },
})