import { border, borderZinc800, gapY2, px4, py2, roundedMd, textLg, textSm, textWhite, textZinc400 } from '@/style'
import type { Convidado } from 'core'
import React from 'react'
import { Text, View } from 'react-native'

export interface ListaConvidadosProps {
  convidados: Convidado[]
}

export default function ListaConvidados(props: ListaConvidadosProps) {
  return (
    <View>
      {props.convidados && props.convidados.length > 0 ? (
        <View style={[gapY2]}>
          {props.convidados.map((convidado, i) => (
            <View key={convidado.id} style={[borderZinc800, border, roundedMd, px4, py2]}>
              <Text style={[textWhite, textLg]}>{convidado.nome}</Text>
              <Text style={[textZinc400, textSm]}>{convidado.email}</Text>
            </View>
          ))}
        </View>
      ) : (
        <View>
          <Text style={[textZinc400]}>Ninguém por aqui ainda...</Text>
        </View>
      )}
    </View>
  )
}

