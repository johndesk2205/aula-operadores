let num1 = prompt(`Digite o primeiro número:`)
let num2 = prompt(`Digite o segundo número:`)

console.log(`O primeiro número digitado foi: ${num1}.`);
console.log(`O segundo número digitado foi: ${num2}.`);
// a) O primeiro numero é maior que o segundo? true

console.log(`O ${num1} é maior que o ${num2}:` + (num1>num2))

// b) O primeiro numero é igual ao segundo? false

console.log(`O ${num1} é igual ao ${num2}:` + (num1 === num2))

// c) O primeiro numero é divisível pelo segundo? true

console.log(`O ${num1} é divisível pelo ${num2}:` + (num1 % num2 === 0))

// d) O segundo numero é divisível pelo primeiro? true

console.log(`O ${num2} é divisível pelo ${num1}:` + (num2 % num1 === 0))

