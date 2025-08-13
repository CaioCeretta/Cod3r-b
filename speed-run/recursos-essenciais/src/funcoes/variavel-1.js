function bomDia() {
	console.log('Bom dia!')
}

/*

Quando usamos desta maneira, nao estamos armazenando a função dentro da variavel e sim o armazenando, o retorno da função
bom dia

Se quisermos armazenar a funcao devemos utilizar da segunda forma

*/

const saudacao = bomDia

// let saudacao = bomDia()

bomDia()
saudacao()
