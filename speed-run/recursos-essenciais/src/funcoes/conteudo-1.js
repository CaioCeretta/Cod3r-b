function externa() {
	function interna() {
		function maisInterna() {
			console.log('mais interna')
		}

		console.log('interna')
		console.log('mais interna')
	}

	interna()

	console.log('Fim da função externa')
}

externa()
