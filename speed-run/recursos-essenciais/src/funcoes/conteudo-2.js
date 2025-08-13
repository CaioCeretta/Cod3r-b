/*
  Uma funcionalidade das funções de javascript, não é muito comum, porém é útil em um paradigma de programação chamado
  paradigma funcional, que é, vamos supor, que temos a função somar com 3 parametros que serão somados entre si

  mas esse paradigma é basicamente nós passarmos os parametros de uma maneira "parcelada", nós estamos acostumados a
  chamar todos parametros de uma só vez, mas digamos que exista algum cenário onde temos o parametro a, mas ainda nao
  temos o parametro b, ou em que queiramos passar o mesmo parametro a várias vezes e DEPOIS passar o b e DEPOIS  o c

*/

function somar(a, b) {
	return a + b
}

console.log(somar(1, 2, 3))
console.log(somar(4, 5, 6))

/* Agora como fazemos para passar os parametros de forma parcelada?

Ao invés de passarmos o parametro b, podemos retornar uma função que irá receber o parametro b e somente dentro dessa 
função que estamos retornando, nós iremos somar o valor de a e b
*/

function somar2(a) {
	return function (b) {
		return a + b
	}
}

const somarCom4 = somar2(4)
const somarComMil = somar2(1000)

/* Agora a função somar com 4 está recebendo como retorno a função que recebe o valor de b e retorna o a + b */

console.log(somarCom4(2))
console.log(somarComMil(120))

/* E para chamar esse tipo de função de uma vez seria */

console.log(somar2(3)(4))
