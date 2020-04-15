/*function multiplicarPor(n) {
    return function(x) {return x * n}
}
var por10 = multiplicarPor(100)

console.log(por10(2))
console.log(por10(10))
*/
function multiplicarPor(n) {
    console.log('1. x existe?', (typeof x))
    return function(x) {return `A multiplicação de ${x} por ${n} é igual a ${x*n}. ${typeof(x)} ${typeof(n)}`}
}

var por10 = multiplicarPor(10)

console.log(por10(5))

console.log('2. x existe?', (typeof x))
