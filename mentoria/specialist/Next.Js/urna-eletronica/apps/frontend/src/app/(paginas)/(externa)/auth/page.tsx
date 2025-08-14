import Page from "@/components/shared/Pagina";

export default function TelaLogin() {
	return (
		<div className="flex flex-col justify-center items-center gap-6 h-screen">
			<h1 className="text-3xl font-bold">Seja bem vindo(a)</h1>
			<div className="bg-zinc-900 rounded-lg gap-6 flex flex-col p-7">
				<div className="flex flex-col gap-1">
					<span>E-mail</span>
					<input type="text" className="input" />
				</div>
				<div className="flex flex-col gap-1">
					<span>Senha</span>
					<input type="password" className="input" />
				</div>

				<button type="button" className="botao azul">
					Entrar
				</button>
			</div>
		</div>
	);
}
