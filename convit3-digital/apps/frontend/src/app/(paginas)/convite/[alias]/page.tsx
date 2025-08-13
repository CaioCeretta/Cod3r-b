'use client'

import FormConvidado from "@/components/evento/FormConvidado";
import InformacoesEvento from "@/components/evento/InformacoesEvento";
import Janela from "@/components/shared/Janela";
import Processando from "@/components/shared/Processando";
import useEvento from "@/data/hooks/useEvento";
import type { Evento } from "core";
import { use, useEffect } from "react";

export default function PaginaConvite(props: any) {
  const params: any = use(props.params)
  const { evento, convidado, alterarConvidado, adicionarConvidado, carregarEvento } = useEvento()

  useEffect(() => {
    carregarEvento(params.alias)
  }, [carregarEvento, params.alias])

  console.log(convidado)

  return evento?.alias ? (
    <div>
      <Janela 
        label="Você foi convidado para: "
        titulo={evento.nome}  
        imagem={evento.imagem}
        background={evento.imagemBackground}
      >
        <InformacoesEvento esconderNome={true} evento={evento as Evento} />
        <div className="flex flex-col gap-4 pt-10">
          <span className="text-xl font-bold">Insira seus dados</span>
          <div className="border border-t-px border-zinc-800" />
          <FormConvidado convidado={convidado} convidadoMudou={alterarConvidado}/>
        <button
          className={` botao ${convidado.confirmado ? 'verde' : 'vermelho'} self-center`}
          onClick={adicionarConvidado}> 
            Confirmar {convidado.confirmado ? 'Presença' :  'Ausência' }
          </button>
        </div>

      </Janela>
    </div>
  ) : (
    <Processando />
  );
}