"use client";

import Link from "next/link";
import { useContext } from "react";
import ContextoAutenticacao from "@/data/contexts/ContextoAutenticacao";

// export interface CabecalhoProps {}

export const Cabecalho = () => {
	const { usuario } = useContext(ContextoAutenticacao);

	return (
		<header className="flex justify-between items-center h-24 bg-zinc-900">
			<div className="flex justify-between items-center container">
				<h1 className="text-white text-2xl font-bold ml-5">Elections 2012</h1>
				<nav className="flex items-center gap-5 mr-5">
					<Link href={"/"}>Start</Link>
					{usuario !== null && (
						<>
							<Link href="/candidato" className="text-white">
								Candidatos
							</Link>

							<Link href="/eleitor" className="text-white">
								Eleitor
							</Link>
						</>
					)}
					<Link href={"/auth"} className="botao azul">
						Login
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Cabecalho;
