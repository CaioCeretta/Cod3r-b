'use client'

import useMensagens from "@/data/hooks/useMensagens";
import { IconCopy } from "@tabler/icons-react";

export interface CopiarClipboardProps {
  label: string;
  texto: string;
  observacao?: string;
  icone: React.ElementType
}

function CopiarClipboard(props: CopiarClipboardProps) {

  const {adicionarSucesso } = useMensagens()

  function copiarTexto() {
    navigator.clipboard.writeText(props.texto);
    adicionarSucesso('Texto copiado para a área de transferência!')
  }

  return (
    <div className="flex flex-col gap-2">
    <span>{props.label}</span>
    <div className="flex items-center bg-black
     border border-zinc-800 gap-3 px-4 py-2 text-zinc-300 text-lg">
        {props.icone && <props.icone stroke={1.3} />}
        <span className="flex-1">{props.texto}</span>
        <IconCopy stroke={1.3} onClick={copiarTexto} className="cursor-pointer" />
      </div>
      {props.observacao && (
        <span className="text-xs text-yellow-300/80">
          {props.observacao}
        </span>
      )}
    
    </div>
  )
}

export default CopiarClipboard