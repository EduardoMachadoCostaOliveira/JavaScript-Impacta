function multiplicarPor(n) {
    return function(x) {return x * n}
}
var por10 = multiplicarPor(100)

console.log(por10(2))
console.log(por10(10))
