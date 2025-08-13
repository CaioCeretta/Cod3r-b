import { gapY2 } from '@/style'
import type { Evento } from 'core'
import React from 'react'
import { View } from 'react-native'
import Informacao from '../shared/Informacao'

interface InformacoesEventoProps {
  evento: Evento
}

const InformacoesEvento = (props: InformacoesEventoProps) => {
  return (
    <View style={[gapY2]}>
      <Informacao label='Nome'>{props.evento.nome}</Informacao>
      <Informacao label='Data'>
        {
          new Date(props.evento.data).toLocaleDateString("pt-BR") //Irá retornar o ISO da data, porém formatado para 20/11/24
        }
        {
          ' às '
        }
        {
          new Date(props.evento.data).toLocaleTimeString("pt-BR") // Transformara a data em date time
        }

      </Informacao>
      <Informacao label="Local">{props.evento.local}</Informacao>
      <Informacao label="Descrição">{props.evento.descricao}</Informacao>
    </View>
  )
}

export default InformacoesEvento