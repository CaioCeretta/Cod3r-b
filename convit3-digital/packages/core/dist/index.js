"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Alias: () => Alias,
  Data: () => Data,
  Id: () => Id,
  Senha: () => Senha,
  complementarConvidado: () => complementarConvidado,
  complementarEvento: () => complementarEvento,
  criarConvidadoVazio: () => criarConvidadoVazio,
  criarEventoVazio: () => criarEventoVazio,
  eventos: () => evento_default
});
module.exports = __toCommonJS(src_exports);

// src/shared/Alias.ts
var Alias = class {
  static formatar(valor) {
    return valor.replace(/ /g, "-").toLowerCase();
  }
};

// src/shared/Data.ts
var Data = class {
  /* Simplify the process of transforming a date to text and text to date */
  static formatar(data) {
    const pad = (n) => n.toString().padStart(2, "0");
    const d = data ?? /* @__PURE__ */ new Date();
    const dia = pad(d.getDate());
    const ano = d.getFullYear();
    const mes = pad(d.getMonth() + 1);
    const hora = pad(d.getHours());
    const minuto = pad(d.getMinutes());
    return `${ano}-${mes}-${dia}T${hora}:${minuto}`;
  }
  static desformatar(data) {
    const [ano, mes, dia] = data.split("T")[0].split("-");
    const [hora, minuto] = data.split("T")[1].split(":");
    return new Date(
      parseInt(ano),
      parseInt(mes),
      parseInt(dia),
      parseInt(hora),
      parseInt(minuto)
    );
  }
};
console.log(Data.formatar(Data.desformatar("2024-11-19T21:51")));

// src/shared/id.ts
var import_uuid = require("uuid");
var Id = class {
  static novo() {
    return (0, import_uuid.v4)();
  }
  static valido(id) {
    return (0, import_uuid.validate)(id);
  }
};

// src/shared/Senha.ts
var Senha = class {
  static nova(tamanho = 15) {
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const maiusculas = minusculas.toUpperCase();
    const numeros = "0123456789";
    const especiais = "!@#$%&*";
    const grupos = [minusculas, maiusculas, numeros, especiais];
    const senha = [];
    for (let i = 0; i < tamanho; i++) {
      const grupo = grupos[Math.floor(Math.random() * grupos.length)];
      senha.push(grupo[Math.floor(Math.random() * grupo.length)]);
    }
    return senha.join("");
  }
};

// src/constants/evento.ts
var eventos = [
  {
    id: "0da054a5-91ef-4ad6-ae2f-bd30ba0f5f0d",
    alias: "evento-fullstack",
    senha: "senha123",
    nome: "Evento de Desenvolvimento Fullstack",
    data: /* @__PURE__ */ new Date("2024-12-01T10:00:00Z"),
    local: "S\xE3o Paulo, SP",
    descricao: "Um evento completo para aprender desenvolvimento fullstack do zero.",
    imagem: "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    imagemBackground: "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    publicoEsperado: 200,
    convidados: [
      {
        id: Id.novo(),
        nome: "Alice Silva",
        email: "alice@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1
      },
      {
        id: Id.novo(),
        nome: "Carlos Pereira",
        email: "carlos@example.com",
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      },
      {
        id: Id.novo(),
        nome: "Beatriz Lima",
        email: "beatriz@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 2
      }
    ]
  },
  {
    id: "cfe1eabc-df67-40a2-8295-1e6dd48c3a15",
    alias: "evento-js-avancado",
    senha: "js2024",
    nome: "Workshop Avan\xE7ado de JavaScript",
    data: /* @__PURE__ */ new Date("2024-11-20T15:00:00Z"),
    local: "Rio de Janeiro, RJ",
    descricao: "Um workshop avan\xE7ado para programadores JavaScript.",
    imagem: "https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200",
    imagemBackground: "https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg",
    publicoEsperado: 100,
    convidados: [
      {
        id: Id.novo(),
        nome: "Eduardo Santos",
        email: "eduardo@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      },
      {
        id: Id.novo(),
        nome: "Fernanda Costa",
        email: "fernanda@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1
      }
    ]
  },
  {
    id: "346e2aa1-ad66-4de7-96db-e3cb353f77e4",
    alias: "evento-dev-frontend",
    senha: "front123",
    nome: "Bootcamp de Desenvolvimento Frontend",
    data: /* @__PURE__ */ new Date("2024-11-15T09:00:00Z"),
    local: "Belo Horizonte, MG",
    descricao: "Aprenda a criar interfaces incr\xEDveis e responsivas.",
    imagem: "https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg",
    imagemBackground: "https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg",
    publicoEsperado: 150,
    convidados: [
      {
        id: Id.novo(),
        nome: "Gabriela Rocha",
        email: "gabriela@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1
      },
      {
        id: Id.novo(),
        nome: "Hugo Nogueira",
        email: "hugo@example.com",
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      },
      {
        id: Id.novo(),
        nome: "Isabela Martins",
        email: "isabela@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      }
    ]
  },
  {
    id: "a15b6b40-19ae-4ee3-bbe1-4d4c030042d0",
    alias: "casamento-alberto-marina",
    senha: "casamento2024",
    nome: "Casamento do Alberto e Marina",
    data: /* @__PURE__ */ new Date("2024-11-25T16:00:00Z"),
    local: "Florian\xF3polis, SC",
    descricao: "Celebra\xE7\xE3o do casamento de Alberto e Marina com amigos e familiares.",
    imagem: "https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg",
    imagemBackground: "https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg",
    publicoEsperado: 150,
    convidados: [
      {
        id: Id.novo(),
        nome: "Bruno Cardoso",
        email: "bruno@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1
      },
      {
        id: Id.novo(),
        nome: "Carla Mendes",
        email: "carla@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      }
    ]
  },
  {
    id: "f9b5bd0f-ca80-47ca-9b71-8241652100e8",
    alias: "aniversario-joao",
    senha: "joao2024",
    nome: "Anivers\xE1rio do Jo\xE3o - 30 Anos",
    data: /* @__PURE__ */ new Date("2024-12-05T18:00:00Z"),
    local: "Curitiba, PR",
    descricao: "Comemora\xE7\xE3o dos 30 anos de Jo\xE3o com amigos pr\xF3ximos e familiares.",
    imagem: "https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg",
    imagemBackground: "https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg",
    publicoEsperado: 80,
    convidados: [
      {
        id: Id.novo(),
        nome: "Maria Souza",
        email: "maria@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 2
      },
      {
        id: Id.novo(),
        nome: "Jos\xE9 Almeida",
        email: "jose@example.com",
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      }
    ]
  },
  {
    id: "632f7e34-a6d6-43e8-abf2-fbf7b0b4ad6f",
    alias: "inauguracao-loja-estrela",
    senha: "estrela2024",
    nome: "Inaugura\xE7\xE3o da Loja Estrela",
    data: /* @__PURE__ */ new Date("2024-12-10T09:00:00Z"),
    local: "Porto Alegre, RS",
    descricao: "Evento de inaugura\xE7\xE3o da nova loja Estrela com brindes e promo\xE7\xF5es.",
    imagem: "https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png",
    imagemBackground: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s",
    publicoEsperado: 300,
    convidados: [
      {
        id: Id.novo(),
        nome: "Cl\xE1udia Lima",
        email: "claudia@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 3
      },
      {
        id: Id.novo(),
        nome: "Ricardo Barbosa",
        email: "ricardo@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      }
    ]
  },
  {
    id: "74218168-ba50-4196-9c37-1247bde7433b",
    alias: "reuniao-familia-oliveira",
    senha: "familia2024",
    nome: "Reuni\xE3o da Fam\xEDlia Oliveira",
    data: /* @__PURE__ */ new Date("2024-12-15T12:00:00Z"),
    local: "Salvador, BA",
    descricao: "Reuni\xE3o de fim de ano da fam\xEDlia Oliveira.",
    imagem: "https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg",
    imagemBackground: "https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid",
    publicoEsperado: 50,
    convidados: [
      {
        id: Id.novo(),
        nome: "Thiago Oliveira",
        email: "thiago@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 4
      },
      {
        id: Id.novo(),
        nome: "Let\xEDcia Oliveira",
        email: "leticia@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      }
    ]
  }
];
var evento_default = eventos;

// src/evento/functions/validarConvidado.ts
function validarConvidado(convidado) {
  const erros = [];
  if (!convidado.nome) {
    erros.push("Nome \xE9 obrigat\xF3rio");
  }
  if (!convidado.email) {
    erros.push("E-mail \xE9 obrigat\xF3rio");
  }
  return erros;
}

// src/evento/functions/complementarConvidado.ts
function complementarConvidado(convidado) {
  const erros = validarConvidado(convidado);
  if (erros.length > 0) {
    throw new Error(erros.join("\n"));
  }
  const qtdeAcompanhantes = convidado.qtdeAcompanhantes ?? 0;
  const temAcompanhantes = convidado.possuiAcompanhantes && convidado.confirmado && qtdeAcompanhantes > 0;
  const convidadoAtualizado = {
    ...convidado,
    qtdeAcompanhantes: temAcompanhantes ? qtdeAcompanhantes : 0,
    possuiAcompanhantes: temAcompanhantes
  };
  return convidadoAtualizado;
}

// src/evento/functions/validarEvento.ts
function validarEvento(evento) {
  const erros = [];
  if (!evento.alias) {
    erros.push("Alias \xE9 obrigat\xF3rio");
  }
  if (!evento.nome) {
    erros.push("Nome \xE9 obrigat\xF3rio");
  }
  if (!evento.descricao) {
    erros.push("Descri\xE7\xE3o \xE9 obrigat\xF3ria");
  }
  if (!evento.data) {
    erros.push("Data \xE9 obrigat\xF3ria");
  }
  if (!evento.local) {
    erros.push("Local \xE9 obrigat\xF3rio");
  }
  if (!evento.publicoEsperado || evento.publicoEsperado < 1) {
    erros.push("P\xFAblico esperado \xE9 obrigat\xF3rio");
  }
  if (!evento.imagem) {
    erros.push("Imagem \xE9 obrigat\xF3ria");
  }
  if (!evento.imagemBackground) {
    erros.push("Imagem de fundo \xE9 obrigat\xF3ria");
  }
  return erros;
}

// src/evento/functions/complementarEvento.ts
function complementarEvento(eventoParcial) {
  const erros = validarEvento(eventoParcial);
  if (erros.length) {
    throw new Error(erros.join("\n"));
  }
  const evento = {
    ...eventoParcial,
    id: eventoParcial.id ?? Id.novo(),
    senha: eventoParcial.senha ?? Senha.nova(20),
    publicoEsperado: +(eventoParcial.publicoEsperado ?? 1)
  };
  return evento;
}

// src/evento/functions/criarConvidadoVazio.ts
function criarConvidadoVazio() {
  return {
    id: Id.novo(),
    nome: "",
    email: "",
    confirmado: true,
    possuiAcompanhantes: true,
    qtdeAcompanhantes: 0
  };
}

// src/evento/functions/criarEventoVazio.ts
function criarEventoVazio() {
  return {
    id: Id.novo(),
    nome: "",
    descricao: "",
    data: /* @__PURE__ */ new Date(),
    local: "",
    publicoEsperado: 1,
    imagem: "",
    imagemBackground: ""
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Alias,
  Data,
  Id,
  Senha,
  complementarConvidado,
  complementarEvento,
  criarConvidadoVazio,
  criarEventoVazio,
  eventos
});
