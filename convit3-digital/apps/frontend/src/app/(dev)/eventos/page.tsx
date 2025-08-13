import { eventos } from "core";
import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";


export default function PaginaEventos(props: any) {

  console.log(props)

  return (
    // <div className="flex flex-col gap-5 items-center ">
    <div className="
            grid grid-cols-3 md:grid-cols-2 gap-5
          ">
      {
        eventos.map(evento => (
          <div key={evento.id} className="
          flex flex-col
          bg-zinc-800 rounded-lg
          ">

            <div className="h-52 w-full relative">

              <Image
                src={evento.imagem}
                fill
                alt={evento.nome}
                className="object-cover"
              />
            </div>



            {/* The flex-1 is for occupying all the available place */}
            <div className="flex flex-1 flex-col p-7 gap-5 items-center">
              <span className="text-lg font-black">{evento.nome}</span>
              <p className="flex-1 text-sm text-zinc-400 text-center">{evento.descricao}</p>
              <QRCode
                value={JSON.stringify({id: evento.id, senha: evento.senha})}
                className="w-32 h-32"
              />
              <div className="flex gap-5">
                <Link href={`/evento/admin/${evento.id}/${evento.senha}`} className="botao vermelho flex-1">
                  Admin
                </Link>
                <Link href={`/convite/${evento.alias}`} className="botao verde flex-1">
                  Convite
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}