let numero = 1 // Declaração da variável

while (numero <= 10) {
	// Expressão - expressão que define se irá continuar, verdeiro ou falso

	console.log(`O valor do número é ${numero}.`)

	numero++ // Incremento
}

console.log('Fim!')

/*
	Para fazer o processo de depuração do código temos que seguir os seguintes passos

	1 - Clicar ao lado esquerdo de on está o numero da linha para marcar esta linha como um breakpoint para a depuração
	2 - Clicar no botão ao lado da aba para "run and debug", selecionamos node.js e o editor irá executar o código passo
	a passo, no modo debug nós temos os seguintes passos

	1 - Step Over - Significa que no atual momento da execução, nos conseguimos, por exemplo, entender o que está acontecendo
	em nosso programa, na aba lateral, nós podemos ver as variáveis criadas até então, e qual o valor atual.

	No primeira execução, o valor de numero é 1,  e o nós podemos ver que esse é o valor atual da variável, se nós clicarmos
	no step over, ele irá para a proxima linha, que está pegando o valor da variavel numero e acrescentando 1, então quando
	dermos um step over novamente, vamos poder ver que o numero foi atualizado, e agora possui o valor 2.

	Onde nós temos o watch, ainda na aba lateral, nós podemos adicionar expressões, como por exemplo

	"numero <= 10"

	Agora, baseando se no valor atual da variavel que está sendo comparada, essa expressão irá retornar um booleano para
	nós. E podemos perceber que a cada vez que o valor de numero é atualizado, a função watch também é, então se fomos pulando
	até o momento em que o numero seja maior ou igual a 10, o watch retornará falso



*/
