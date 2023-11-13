// 1) O salário fixo mais o auxílio creche

let salario = 2000
let creche = 45.50

let salarioMaisCreche = salario + creche

console.log(`Salário + Auxilio Creche = ${salarioMaisCreche}`)


// 2) Quanto Pedrinho da Silva receberá de comissão em janeiro (dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)

let comissaoJaneiro = 5784.50

comissaoJaneiro *= 0.10

console.log(`Comissão de Janeiro = ${comissaoJaneiro}`)


// 3) Quanto Pedrinho da Silva será descontado em janeiro pelo INSS (o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas)

let inssJaneiro = (salario + comissaoJaneiro)*0.05

console.log(`O valor do Inss de Janeiro = ${inssJaneiro.toFixed(2)}`)

// 4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos, ou seja, o valor líquido.

let janeiro = (salario + comissaoJaneiro + creche) - (salario + comissaoJaneiro)*0.05
// 2623,95 - 128,92 = 2495,03

// 5) A média do salário líquido em  seis meses (de janeiro a junho).