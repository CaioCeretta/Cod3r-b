const autorAr = ['123', 'J. K. Rowling', '...', '65']

/**
 * The problem of defining a constant such as the author, which is being assigned to these values, in an array it would
 * be like this, where each value of the array would be an info about the author, but this would be weird, because it
 * would be many informations, side by side and we wouldn't know what we are talking about, so the best way of organizing
 * an structure like this that is basically a sequence of indexed values, is by using objects
 */

const autor = {
	id: 'j-k-rowling',
	nome: 'J. K. Rowling',
	idade: 65,
	imagem:
		'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/04/GettyImages-950041970-e1712065084538.jpg',
	biografia: '...',
}

console.log(autor.id)
console.log(autor.imagem)
console.log(autor['nome'])

let livro = {
	id: 'harry-potter-e-a-pedra-filosofal',
	nome: 'Harry Potter e a Pedra Filosofal',
	autor: autor,
	ano: 1997,
	ordem: 1,
	imagem:
		'https://m.media-amazon.com/images/I/81pB+joKL4L._SL1500_.jpg',
}

console.log(livro.nome)
console.log(livro.autor.nome)
