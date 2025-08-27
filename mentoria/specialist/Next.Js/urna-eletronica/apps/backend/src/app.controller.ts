import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
	@Get("hello")
	getHello(): any {
		return {
			mensagem: "Ciao, mondo",
		};
	}

	@Get("receita-figado")
	getReceitaFigado(): any {
		return {
			ingredientes: `<ul>
				<li> 1/2 Bife de figado </li>
				<li> 1/2 colher de sopa de alho preparado </li>
				<li> sal a gosto </li>
				<li> 1 limão</li>
				<li> 1/2 colher de oregano </li>
				<li> 1/2 cebola </li>
			</ul>`,
		};
	}
}
