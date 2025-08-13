import { Injectable } from '@nestjs/common';
import type { Convidado, Evento } from 'core';
import { PrismaProvider } from 'src/db/prisma';

@Injectable()
export class EventoPrisma {
  constructor(readonly prisma: PrismaProvider) {}

  salvar(evento: Evento) {
    return this.prisma.evento.create({
      data: {
        ...(evento as any),
        convidados: { create: evento.convidados },
      },
    });
  }

  salvarConvidado(evento: Evento, convidado: Convidado) {
    /* The connect field inside the data object is where the relationship is defined. it tells prisma to associate the Convidado
    being created with an already existing Evento who id matches evento.id */

    return this.prisma.convidado.create({
      data: {
        ...convidado,
        qtdeAcompanhantes: +(convidado.qtdeAcompanhantes ?? 0),
        evento: { connect: { id: evento.id } },
      },
    });
  }

  async buscarTodos(): Promise<Evento[]> {
    return this.prisma.evento.findMany() as any;
  }

  /** The reason that i'm many cases, we are typing the return as any is because these find methods are typed, so it expects
   us to define the type of the data being returned, and by default, Prisma generates types for our database schema, and
   typescript will infer those types when we use find unique. Our code without as any, typescript checks the return type
   of findUnique method against how we're using the returned valed elsewhere in our code, and if there'ws a mismatch of
   the type isn't explicitly handled (e.g. null checks) typescript throws an error.

   As any works because this cast is basically saying, "i know better than you, don't check this type" and this supresses
   the error, but it's a band-aid solution. Using as any bypasses ts static analysis, which defeats its purpose of catching
   bugs before run time.

   On other hand, we can fix this without as any, by explicitly handling the nullability or narrow the type correctly.
   so we can simply add a null check where appropriate, such as making the evento = await...

   and adding a if(!evento) throw new Error('Evento not found')

   Other option is, type asserting that we're absolutely sure the result won't be null by adding a ! after the return

   It's actually a good practice to avoid as any, because it bypasses ts type-checking capabilities, making our code prone
   and ts's goal is to provide us with static guarantees, whereas as any undermines that purpose.
   */
  async buscarPorId(
    id: string,
    completo: boolean = false,
  ): Promise<Evento | null> {
    return this.prisma.evento.findUnique({
      where: { id },
      include: { convidados: completo },
    }) as any;
  }

  async buscarPorAlias(
    alias: string,
    completo: boolean = false,
  ): Promise<Evento | null> {
    return this.prisma.evento.findUnique({
      select: {
        id: true,
        nome: true,
        descricao: true,
        data: true,
        local: true,
        imagem: true,
        imagemBackground: true,
        alias: true,
        senha: completo,
        publicoEsperado: completo,
        convidados: completo,
      },
      where: { alias },
    }) as any;
  }
}
