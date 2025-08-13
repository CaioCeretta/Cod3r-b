import { bgBlack, centerGrow, textWhite } from '@/style'
import React from 'react'
import { Text, View } from 'react-native'

const EventoNaoEncontrado = () => {
  return (
    <View style={[centerGrow, bgBlack]}>
      <Text style={[textWhite]}>Evento não encontrado</Text>
    </View>
  )
}

export default EventoNaoEncontrado