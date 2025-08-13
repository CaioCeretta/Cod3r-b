let trabalhoTerça = false
let trabalhoQuinta = true

// Operação lógica E (AND) -> &&
let comprarTV55 = trabalhoTerça && trabalhoQuinta

console.log('Comprar TV 55:', comprarTV55)

// Operação lógica OU (OR) -> ||

let tomarSorvete = trabalhoTerça || trabalhoQuinta

console.log('Tomar sorvete', tomarSorvete)

/* Operação lógica Ou Exclusivo (XOR), even though in js we don't have but we will replicate like this

the xor is only true when the two values being compared are different
*/

let comprarTV42 = trabalhoTerça != trabalhoQuinta

console.log('Comprar TV 42:', comprarTV42)
