import series from '../../../constants/series'

export function load(dados) {
	const serieId = dados.params.id

	for (let serie of series) {
		if (serie.id === serieId) {
			return {
				serie,
			}
		}
	}

	error(404, 'Autor não encontrado')
}
