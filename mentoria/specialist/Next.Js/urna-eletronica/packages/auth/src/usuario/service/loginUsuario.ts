import { usuariosFalsos as usuarios } from "../../constantes/usuarios";

export default function loginUsuario(email: string, senha: string) {
	const usuario = usuarios.find(
		(usuario) => usuario.email === email && usuario.senha === senha,
	);

	if (!usuario) {
		throw new Error("User not found");
	}

	// This is not a good practice, but just following the course.
	if (usuario.senha !== senha) {
		throw new Error("Invalid Password");
	}

	return usuario;
}
