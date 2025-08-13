'use client'
import DashboardEvento from "@/components/evento/DashboardEvento";
import FormSenhaEvento from "@/components/evento/FormSenhaEvento";
import useAPI from "@/data/hooks/useAPI";
import { type Convidado, type Evento, eventos } from "core";
/* The spreading in the folder name, indicated that we are going to receive more than one parameter, in this case, the
id and possibly its password, the spread return the params in key values, and we can access them by doing like so */

import { use, useCallback, useEffect, useState } from "react";


export default function PaginaAdminEvento(props: any) {

  const { httpPost } = useAPI()

  /* To have access to the params of the url, we can utilize the use from react that have the purpose of encapsulating
  data inside a promise */
  const params: any = use(props.params)

  const id = params.todos[0];

  const [evento, setEvento] = useState<Evento | null>(null)
  const [senha, setSenha] = useState<string>(params.todos[1] ?? "")

  const presentes = evento?.convidados.filter((c) => c.confirmado) ?? [];
  const ausentes = evento?.convidados.filter((c) => !c.confirmado) ?? [];

  const totalGeral = presentes.reduce((total: number, convidado: Convidado) => {
    return total + convidado.qtdeAcompanhantes + 1;
  }, 0)


  function carregarEvento() {
    console.log('Carregando o evento', id, senha)

    const evento = eventos.find(ev => ev.id === id && ev.senha === senha)

    setEvento(evento ?? null);
  }

  const obterEvento = useCallback(async () => {
    if(!id || !senha) return;

    const evento = await httpPost('/eventos/acessar', {id,senha})

    setEvento(evento)

  }, [httpPost, id, senha])

  useEffect(() => {
    carregarEvento();
  }, [id, senha])


  return (
    <div className="flex flex-col items-center" >
      {evento ? (
        <DashboardEvento
          evento={evento}
          presentes={presentes}
          ausentes={ausentes}
          totalGeral={totalGeral ?? 0}
          atualizarLIstaConvidados={obterEvento}
         />
      ) : (
        <FormSenhaEvento
          acessarEvento={obterEvento}
          senha={senha}
          setSenha={setSenha}
        />
      )
      }
    </div>
  )
} 
