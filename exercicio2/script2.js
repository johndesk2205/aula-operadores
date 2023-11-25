


// a) O primeiro numero é maior que o segundo? true



// b) O primeiro numero é igual ao segundo? false



// c) O primeiro numero é divisível pelo segundo? true



// d) O segundo numero é divisível pelo primeiro? true









//Declaração das variáveis
let numero1 = parseInt(prompt("Digite o primeiro número"))
let numero2 = parseInt(prompt("Digite o segundo número"))


// a) O primeiro numero é maior que o segundo?
console.log(numero1>numero2)
console.log(`O ${numero1} é maior que o ${numero2}?`, (numero1>numero2))

// b) O primeiro numero é igual ao segundo? 
console.log(`O ${numero1} é igual ao ${numero2}?`,(numero1 == numero2))

// c) O primeiro numero é divisível pelo segundo? 
console.log(`O ${numero1} é divisível pelo ${numero2}?`,(numero1%numero2) === 0)

// d) O segundo numero é divisível pelo primeiro?
console.log(`O ${numero2} é divisível pelo ${numero1}?`,(numero2%numero1) === 0)