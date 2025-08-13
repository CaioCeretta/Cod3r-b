/* This function is going to be used before we save a guest to the db, because we want to make sure that the data of the
guest which has confirmed it's data, is consistent, because let's say the guest enters the confirmation screen and he
checks that he confirms his presence, and that he will bring five companions to the event, but afterwards he thinks, 
"Oh, i won't be able to attend the event anymore because i remembered that i have a meeting at the same time", then he
chooses not to confirm his presence anymore, but in the object, there are still stored he will bring companions and the
companions number will be five, so by the time that a guest didn't confirm his presence, we will automatically have the
number of companions set to 0 and that he won't bring any to maintain a consistence to the object.

This function will guarantee that the datas are going to be consistent
*/

import type Convidado from "../model/Convidado";
import validarConvidado from "./validarConvidado";

export default function complementarConvidado(convidado: Partial<Convidado>): Convidado {

  const erros = validarConvidado(convidado);

  if(erros.length > 0) {
    throw new Error(erros.join('\n'))
  }

  const qtdeAcompanhantes = convidado.qtdeAcompanhantes ?? 0

  const temAcompanhantes = convidado.possuiAcompanhantes && convidado.confirmado && qtdeAcompanhantes > 0

  const convidadoAtualizado = {
    ...convidado,
    qtdeAcompanhantes: temAcompanhantes ? qtdeAcompanhantes : 0,
    possuiAcompanhantes: temAcompanhantes
  }

  return convidadoAtualizado as Convidado
}