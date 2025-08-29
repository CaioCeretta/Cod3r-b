import { Injectable } from '@nestjs/common';
import type RepositorioUsuario from '@urna/auth';
import type { Usuario } from '@urna/auth';

@Injectable()
export default class RepositorioUsuarioArray implements RepositorioUsuario {
	private usuarios: Usuario[] = [];

	async buscarPorId(id: number): Promise<Usuario | null> {
		return this.usuarios.find((usuario) => usuario.id === id) || null;
	}

	async buscarPorEmail(email: string): Promise<Usuario | null> {
		return this.usuarios.find((usuario) => usuario.email === email) || null;
	}

	async salvar(usuario: Usuario): Promise<void> {
		this.usuarios.push(usuario);
	}
}
