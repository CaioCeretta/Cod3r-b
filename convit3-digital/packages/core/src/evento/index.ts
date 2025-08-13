import Convidado from "./model/Convidado";
import Evento from "./model/Evento";

import complementarConvidado from "./functions/complementarConvidado";
import complementarEvento from "./functions/complementarEvento";
import criarConvidadoVazio from "./functions/criarConvidadoVazio";
import criarEventoVazio from "./functions/criarEventoVazio";

export {
  complementarConvidado,
  complementarEvento,
  criarConvidadoVazio,
  criarEventoVazio
};
export type { Convidado, Evento };

