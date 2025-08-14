`use client`;

import { createContext } from "react";

const ContextoAutenticacao = createContext({} as any);

export function ProvedorAutenticacao(props: any) {
	return (
		<ContextoAutenticacao.Provider
			value={{
				usuario: null,
			}}
		>
			{props.children}
		</ContextoAutenticacao.Provider>
	);
}

export default ContextoAutenticacao;
