const MIN = 1
const MAX = 10
let SOMA = 0

for (let i = MIN; i <= MAX; i++) {
	if (i % 2 === 0) {
		SOMA += i
	}
}

console.log(SOMA)
