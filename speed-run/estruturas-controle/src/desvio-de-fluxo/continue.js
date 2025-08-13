for (let i = 0; i < 10; i++) {
	/* O continue é semelhante ao break, a diferença é que ele não interrompe o bloco todo, mas vai para a proxima iteração*/

	if (i % 2 === 0) {
		continue
	}

	console.log(i)
}

console.log('Fim')
