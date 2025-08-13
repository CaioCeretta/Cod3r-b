'use client'

import { useToast } from "@/data/hooks/useToast";
import { createContext, useCallback } from "react";

export interface ContextoMensagemProps {
  adicionarSucesso: (texto: string) => void
  adicionarErro: (texto: string) => void
}

const ContextoMensagens = createContext<ContextoMensagemProps>({} as any);

export function ProvedorContextoMensagem(props: any) {
  const { toast } = useToast()

  const adicionarMensagem = useCallback((tipo: 'sucesso' | 'erro', texto: string) => {
    texto.split("/\n/").forEach(linha => {
      toast({
        title: tipo === 'sucesso' ? 'Tudo certo por aqui' : 'Ops, algo deu errado',
        description: texto,
        variant: tipo === 'sucesso' ? 'default' : 'destructive'
  
      })
    })

  }, [toast]);

  return (
      <ContextoMensagens.Provider value={{
        adicionarSucesso(texto) { 
          adicionarMensagem('sucesso', texto)
        },
        adicionarErro(texto) {
          adicionarMensagem('erro', texto)
        }
      }}>
        {props.children }
      </ContextoMensagens.Provider>
    )
}

export default ContextoMensagens