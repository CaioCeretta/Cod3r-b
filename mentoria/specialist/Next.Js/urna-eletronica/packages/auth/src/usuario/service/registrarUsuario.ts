import { usuariosFalsos as usuarios } from '../../constants/usuarios';
import type ProvedorSenhaCriptografada from '../interface/ProvedorSenhaCriptografada';
import type RepositorioUsuario from '../interface/RepositorioUsuario';
import type Usuario from '../model/Usuario';

// This function returns never, instead of undefined because it may return an exception
export default async function registrarUsuario(props: {
	repo: RepositorioUsuario;
	cripto: ProvedorSenhaCriptografada;
	usuario: Partial<Usuario>;
}): Promise<void> {
	const { repo, usuario } = props;

	if (!usuario) {
		throw new Error('Informacoes nao enviadas');
	}

	const usuarioExistente = await repo.buscarPorEmail(usuario.email!);
	if (!usuarioExistente) throw new Error('User not found');

	const senhaCriptografada = await props.cripto.criptografar(usuario.senha!);

	await repo.salvar({ ...usuario, senha: senhaCriptografada } as Usuario);
}
