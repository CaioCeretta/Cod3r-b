import { Controller, Get } from "@nestjs/common";
import { loginUsuario, type Usuario } from "@urna/auth";
import RepositorioUsuarioMemoria from "./RepositorioUsuarioMemoria";

@Controller()
export class AppController {
	@Get("hello")
	async getHello(): Promise<any> {
		const usuario: Usuario = {
			id: "1",
			nome: "Fulano",
			email: "fulano@ciclano.com",
			senha: "123456",
		};

		await loginUsuario({
			email: usuario.email,
			repo: new RepositorioUsuarioMemoria(),
			senha: "123",
		});
		return {
			usuario,
		};
	}
}
