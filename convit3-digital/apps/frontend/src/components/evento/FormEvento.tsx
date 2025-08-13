import React from 'react'
import Passos from '../shared/Passos'
import useEvento from '@/data/hooks/useEvento'
import CampoEntrada from '../shared/CampoEntrada'
import { Alias, Data } from 'core'

export default function FormEvento() {
  const { evento, salvarEvento, aliasValido, alterarEvento } = useEvento()

  const labels = [
    "Identificação do Evento",
    "Local e Data",
    "Informações Finais"
  ]

  const permiteProximoPasso: boolean[] = [
    !!evento.alias && !!evento.nome && aliasValido,
    !!evento.data && !!evento.local,
    !!evento.imagem && (evento.publicoEsperado ?? 0) > 0 &&  !!evento.descricao
  ]

  return (
    <div>
      <Passos
        labels={labels}
        labelAcao='Salvar'
        acao={salvarEvento}
        permiteProximoPasso={permiteProximoPasso}
      >
        <div className='flex flex-col gap-5'>
          <CampoEntrada
            descricao='Identificador único e exclusivo para o evento (usado na URL)'
            label='Identificador'
            observacao='O identificador não pode ser alterado'
            value={Alias.formatar(evento.alias ?? '')}
            erro={aliasValido ? "" : "Identificador já está em uso"}
            onChange={(e) => alterarEvento({...evento, alias: e.target.value})}
          />
          <CampoEntrada
            descricao='Nome do evento (ex.: "Festa de aniversário do João")'
            label='Nome'
            value={evento.nome ?? ''}
            onChange={(e) => alterarEvento({...evento, nome: e.target.value})}
          />
        </div>
        <div className='flex flex-col gap-5'>
          <CampoEntrada
            label='Data'
            descricao='Data e hora em que o evento ocorrerá'
            value={Data.formatar(evento.data ?? new Date())}
            onChange={(e) => alterarEvento({...evento, data: Data.desformatar(e.target.value)})}
            type='datetime-local'
          />
          <CampoEntrada
            label="Local"
            descricao="Local onde o evento será realizado"
            value={evento.local ?? ""}
            onChange={(e) => {
              return (
                alterarEvento({
                  ...evento,
                  local: e.target.value
                })
              )
            }}
            />
        </div>
        <div className='flex flex-col gap-5'>
          <CampoEntrada
            label='Descrição'
            descricao='Descrição do evento (ex.: Só entra se tiver presente)'
            value={evento.descricao ?? ''}
            onChange={(e) => alterarEvento({...evento, descricao: e.target.value})}
          />
          <CampoEntrada
            label='Imagem' 
            descricao='URL da imagem que será exibida no convite'
            value={evento.imagem ?? ''}
            onChange={(e) => alterarEvento({...evento, imagem: e.target.value})}
          />
          <CampoEntrada
            label='Background'
            descricao='URL da imagem que será exibida como plano de fundo no convite'
            value={evento.imagemBackground ?? ''}
            onChange={(e) => alterarEvento({...evento, imagemBackground: e.target.value})}
          />
          <CampoEntrada
            label='Público Esperado'
            descricao='Total de convidados e acompanhantes esperados'
            value={evento.publicoEsperado ?? 1}
            onChange={(e) => alterarEvento({...evento, publicoEsperado: e.target.value})}
            type='number'
            min={1}
          />
        </div>
      </Passos>

    </div>

  )
}
