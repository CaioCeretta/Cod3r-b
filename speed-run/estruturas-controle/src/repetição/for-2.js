for (let linha = 1; linha <= 3; linha++) {
	let textoDaLinha = ''
	for (let coluna = 1; coluna <= 3; coluna++) {
		textoDaLinha += `[${linha}-${coluna}]`
	}

	console.log(textoDaLinha)
}
