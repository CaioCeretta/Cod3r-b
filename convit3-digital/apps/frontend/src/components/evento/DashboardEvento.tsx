import type { Convidado, Evento } from "core";
import Estatistica from "../shared/Estatistica";
import AcessarViaQrCode from "./AcessarViaQrCode";
import InformacoesEventos from "./InformacoesEvento";
import ListaConvidados from "./ListaConvidados";

export interface DashboardEventoProps {
  evento: Evento;
  presentes: Convidado[];
  ausentes: Convidado[];
  totalGeral: number;
  atualizarLIstaConvidados: () => void
}

export default function DashboardEvento(props: DashboardEventoProps) {
  return (
    <div className="flex flex-col">
      <div className="flex gap-5 self-stretch">
        <InformacoesEventos className="flex-1" evento={props.evento} />
        <AcessarViaQrCode evento={props.evento} />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-4">
        <Estatistica
          texto="Expectativa de Convidados: "
          valor={props.evento.publicoEsperado}
          imagem="/icones/convidados.svg"
        />

        <Estatistica
          texto="Confirmações: "
          valor={props.presentes.length}
          imagem="/icones/confirmados.svg"
        />

        <Estatistica
          texto="Total Confirmado: "
          valor={props.totalGeral}
          imagem="/icones/acompanhantes.svg"
        />
      </div>

      {/* The default behavior of an element, in a flexbox, would be to be expanded in its all width, but with the self-end,
       the button will simply go to the end of the container and occupy the width of its content */ }
      <button className="botao azul self-end mt-12"
        onClick={props.atualizarLIstaConvidados}>
        <span>Atualizar Lista de Convidados</span>
      </button>

      <span className="flex py-2 text-xl font-bold text-white/80">Convidados que confirmaram PRESENÇA</span>
      <ListaConvidados convidados={props.presentes} />
      <span className="flex py-2 text-xl font-bold text-white/80">Convidados que confirmaram AUSÊNCIA</span>
      <ListaConvidados convidados={props.ausentes} />
    </div>
  )
}