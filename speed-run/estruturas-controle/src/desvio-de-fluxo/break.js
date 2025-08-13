for (let i = 0; i < 10; i++) {
	if (i == 5) {
		/* esse break dentro de um for vai fazer com que a gente saia da estrutura corrente, no caso o laço de repetição e
    irá desviar o fluxo da aplicação para a linha logo após o for */
		break
	}

	console.log(i)
}

console.log('Fim')
