const nota = +(Math.random() * 11).toFixed(2)
let conceito = ''

switch (Math.floor(nota)) {
	case 10:
	case 9:
		conceito = 'A'
		break
	case 8:
	case 7:
		conceito = 'B'
		break
	case 6:
		conceito = 'C'
		break
	case 5:
	case 4:
		conceito = 'D'
		break
	case 3:
	case 2:
		conceito = 'E'
		break
	default:
		conceito = 'F'
		break
}

console.log(
	`A nota ${Math.floor(nota)} tem como conceito ${conceito}`
)
