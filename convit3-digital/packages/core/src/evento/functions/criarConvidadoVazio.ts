import { Id } from "../../shared";
import type Convidado from "../model/Convidado";

export default function criarConvidadoVazio():Partial<Convidado> {
  return {
    id: Id.novo(),
    nome: '',
    email: '',
    confirmado: false,
    possuiAcompanhantes: true,
    qtdeAcompanhantes: 0
  }
}