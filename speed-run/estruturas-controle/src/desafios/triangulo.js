let linhas = 8

for (let i = 1; i <= linhas; i++) {
	let linha = '' // Inicializa uma string vazia para cada linha
	for (let j = 1; j <= i; j++) {
		linha += '*' // Adiciona um asterisco para cada valor de j
	}

	console.log(linha) // Imprime a linha
}

/* Uma outra maneira seria a seguinte, utilizando a função repeat de uma string

for (let i = 1; i <= linhas; i++) {
	console.log('*'.repeat(i))
}

*/
