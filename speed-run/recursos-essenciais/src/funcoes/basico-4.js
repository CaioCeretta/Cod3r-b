function principal() {
	console.log('[INICIO] Função Principal')
	secundaria()
	console.log('[FIM] Função Principal')
}

function secundaria() {
	console.log('[INICIO] Função Secundária')
	terciaria()
	console.log('[FIM] Função Secundária')
}

function terciaria() {
	console.log('[INICIO] Função Terciária')
	console.log('[FIM] Função Terciária')
}

principal()
