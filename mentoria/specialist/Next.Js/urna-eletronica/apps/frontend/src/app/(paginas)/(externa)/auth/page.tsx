"use client";

import { useContext, useState } from "react";
import Page from "@/components/shared/Pagina";
import ContextoAutenticacao from "@/data/contexts/ContextoAutenticacao";

export default function TelaLogin() {
	const { usuario, login } = useContext(ContextoAutenticacao);

	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");

	return (
		<div className="flex flex-col justify-center items-center gap-6 h-screen">
			<h1 className="text-3xl font-bold">Seja bem vindo(a)</h1>
			<div className="bg-zinc-900 rounded-lg gap-6 flex flex-col p-7">
				<div className="flex flex-col gap-1">
					<span>E-mail</span>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="text"
						className="input"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<span>Senha</span>
					<input
						value={senha ?? ""}
						onChange={(e) => setSenha(e.target.value)}
						type="password"
						className="input"
					/>
				</div>

				<button
					type="button"
					onClick={() => login(email, senha)}
					className="botao azul"
				>
					Entrar
				</button>
			</div>
		</div>
	);
}
