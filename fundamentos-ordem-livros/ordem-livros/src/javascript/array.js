// Array ->     0    1    2    3    4    5    6
const notas = [7.9, 8.3, 9.2, 10]

console.log(notas[0])
console.log(notas[1])
console.log(notas[2])
console.log(notas[3])

notas.push(8.1)

console.log(notas[4])
console.log(notas[5])

notas[0] = 9.9

/**
 * One important thing to notice is, we may think that because the ratings array is being defined as a constant, we shouldn't
 * be able to alter it and we are changing the internal values. Actually, when we say that a structure like this is a
 * constant, inside of it, its values can change, what we can't change is the structure that the variable ratings points to.
 *
 * So what we can't do in arrays is something like
 *
 * ratings = [3.5, 5.5, 6.1]
 *
 * we can't create a structure and then change it to another one, but altering the internal values is tottaly fine.
 *
 */

console.log(notas[0])

console.log(notas)
console.log(notas.length)
