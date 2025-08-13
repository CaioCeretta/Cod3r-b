function somar(numeroA, numeroB, funcao) {
	let resultado = numeroA + numeroB
	;('')
	if (funcao !== null && typeof funcao === 'function') {
		return funcao(resultado)
	}
	return resultado
}

let x = 3
let y = 7

dobro = function (numero) {
	return numero * 2
}

triplo = function (numero) {
	return numero * 3
}

console.log(somar(x, y))
console.log(somar(x, y, dobro))
console.log(somar(x, y, triplo))
