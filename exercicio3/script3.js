// a) 5 é maior que 20 e também é menor que 2; false

const operacao1 = 5 > 20 && 5 < 2;
console.log(operacao1)

// b) 5 é igual a 5 ou é igual a “5”; true

const operacao2 = 5 === 5 || 5 === "5"
console.log(operacao2)

// c) negação de (vinte é maior que cinquenta) true

const operacao3 = 20 > 50
console.log(!operacao3)

// d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta) true

const operacao4 = 20 > 50 || 50 > 60
console.log(!operacao4)