import type { Usuario } from '@urna/auth';
import type RepositorioUsuario from '@urna/auth/src/usuario/interface/RepositorioUsuario';

export default class RepositorioUsuarioArray implements RepositorioUsuario {
	private usuarios: Usuario[] = [
		{
			id: '1',
			email: 'funcionaria@urna.com.br',
			senha: '123456',
			nome: 'Ariele',
		},
	];

	async buscarPorEmail(email: string): Promise<Usuario | null> {
		return this.usuarios.find((usuario) => usuario.email === email) || null;
	}

	async salvar(usuario: Usuario): Promise<void> {
		this.usuarios.push(usuario);
	}
}
