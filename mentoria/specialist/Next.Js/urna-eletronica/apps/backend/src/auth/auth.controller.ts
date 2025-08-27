import { Body, Controller, Post } from '@nestjs/common';
import { loginUsuario, type Usuario } from '@urna/auth';
import * as jwt from 'jsonwebtoken';
import RepositorioUsuarioArray from 'src/usuario-mem.repository';

@Controller('auth')
export class AuthController {
	@Post('login')
	async login(@Body() usuarioInformado: Partial<Usuario>) {
		const usuario = await loginUsuario({
			repo: new RepositorioUsuarioArray(),
			email: usuarioInformado.email,
			senha: usuarioInformado.senha,
		});
		return {
			...usuario,
			token: jwt.sign(usuario, 'chave', {
				expiresIn: '15d',
			}),
		};
	}

	@Post('registrar')
	async registrar() {
		return {
			mensagem: 'usuário registrado com sucesso',
		};
	}
}
