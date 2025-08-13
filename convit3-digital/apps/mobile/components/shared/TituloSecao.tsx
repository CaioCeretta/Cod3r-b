import { fontBold, py4, selfStart, textXl, textZinc400 } from '@/style'
import React from 'react'
import { Text } from 'react-native'

interface TituloSecaoProps {
  texto: string
}

export default function TituloSecao(props: TituloSecaoProps) {
  return (
    /*The way the self start, is that it will self align the element to the start, so even if we have centered elements
    this element will be at the start of the container */
    <Text style={[textXl, fontBold, py4, textZinc400, selfStart]}>{props.texto}</Text>
  )
}