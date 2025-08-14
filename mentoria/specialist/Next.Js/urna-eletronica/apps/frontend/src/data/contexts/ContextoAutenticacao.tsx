`use client`;

import { createContext } from "react";

const ContextoAutenticacao = createContext({} as any);

export function ProvedorAutenticacao(props: any) {
	return (
		<ContextoAutenticacao.Provider
			value={{
				usuario: {
					id: 1,
					nome: "Joao da silva",
					email: "joao.silva@gmail.com",
					senha: "senha123",
				},
			}}
		>
			{props.children}
		</ContextoAutenticacao.Provider>
	);
}

export default ContextoAutenticacao;
