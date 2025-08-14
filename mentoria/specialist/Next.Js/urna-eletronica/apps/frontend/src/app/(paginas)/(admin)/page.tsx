"use client";

import { useContext } from "react";
import ContextoAutenticacao from "@/data/contexts/ContextoAutenticacao";

export default function Home() {
	const { usuario } = useContext(ContextoAutenticacao);

	return <div>{usuario.nome}</div>;
}
