import { Text as TextC, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export default class Text extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextC style={styles.primary}>Text</TextC>
        <TextC style={styles.secondary}>Text 2</TextC>
      </View>
    )
  }
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
    padding: 10,
    color: 'blue',
    fontWeight: 'bold',
  },
  secondary: {
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    color: 'green',
    fontStyle: 'italic',
  },
})