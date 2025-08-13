const min = -562
const max = 413

let paresPositivos = 0
let imparesNegativos = 0

for (let i = min; i <= max; i++) {
	if (i % 2 === 0 && i > 0) {
		paresPositivos += 1
	} else if (i < 0 && i % 2 != 0) {
		imparesNegativos += 1
	}
}

console.log(`Impares Negativos: ${imparesNegativos}`)

console.log(`Pares Positivos ${paresPositivos}`)
