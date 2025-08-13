/*
  One important note about naming conventions

  Use FULL_UPPERCASE for true constants that are global and immutable, like configurations of environment values, and
  choose the use camlCase for constants that are local, scoped to a function or module, or tied to specific computations
*/

const ALTO_CUSTO = 930
const fragil = true

const preco = 1254.89

const caro = preco >= ALTO_CUSTO

if (caro && fragil) {
	console.log('Seguro contratado com sucesso')
}
