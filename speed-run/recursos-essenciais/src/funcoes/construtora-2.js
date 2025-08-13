function Contador(numero) {
	this.numero = numero

	this.incrementar = function () {
		this.numero++
	}

	this.decrementar = function () {
		this.numero--
	}
}

const contador1 = new Contador(100)

contador1.incrementar()
contador1.incrementar()

const outroContador = new Contador(10)

console.log(contador1.numero)
console.log(outroContador.numero)
