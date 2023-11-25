// 1) O salário fixo mais o auxílio creche

let salario = 2000
let auxilioCreche = 45.50

let salarioMaisCreche = salario + (auxilioCreche*2)

console.log(`Salário + Auxilio Creche = ${salarioMaisCreche}`)


// 2) Quanto Pedrinho da Silva receberá de comissão em janeiro (dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)

let comissaoJaneiro = 5784.50

let comissaoJan = comissaoJaneiro*0.10

console.log(`Comissão de Janeiro = ${comissaoJan}`)


// 3) Quanto Pedrinho da Silva será descontado em janeiro pelo INSS (o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas)

let inssJaneiro = (salario + comissaoJan)*0.05

console.log(`O valor do Inss de Janeiro = ${inssJaneiro.toFixed(2)}`)

// 4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos, ou seja, o valor líquido.

const comissaoFevereiro = 3418.41
const comissaoMarco = 4124.10
const comissaoAbril = 1874
const comissaoMaio = 7000
const comissaoJunho = 9450

const mediaJaneiro = (salario+(auxilioCreche*2)+(comissaoJaneiro*0.1))-(salario+(comissaoJaneiro*0.1))*0.05
const mediaFevereiro = (salario+(auxilioCreche*2)+(comissaoFevereiro*0.1))-(salario+(comissaoFevereiro*0.1))*0.05
const mediaMarco = (salario+(auxilioCreche*2)+(comissaoMarco*0.1))-(salario+(comissaoMarco*0.1))*0.05
const mediaAbril = (salario+(auxilioCreche*2)+(comissaoAbril*0.1))-(salario+(comissaoAbril*0.1))*0.05
const mediaMaio = (salario+(auxilioCreche*2)+(comissaoMaio*0.1))-(salario+(comissaoMaio*0.1))*0.05
const mediaJunho = (salario+(auxilioCreche*2)+(comissaoJunho*0.1))-(salario+(comissaoJunho*0.1))*0.05

console.log(`Media do salario de janeiro: ${mediaJaneiro.toFixed(2)}`)

console.log(`Media do salario fevereiro: ${mediaFevereiro.toFixed(2)}`)

console.log(`Media do salario março: ${mediaMarco.toFixed(2)}`)

console.log(`Media do salario abril: ${mediaAbril.toFixed(2)}`)

console.log(`Media do salario maio: ${mediaMaio.toFixed(2)}`)

console.log(`Media do salario junho: ${mediaJunho.toFixed(2)}`)

// 5) A média do salário líquido em  seis meses (de janeiro a junho).
console.log(`A media dos últimos 6 meses é: ${((mediaJaneiro + mediaFevereiro + mediaMarco + mediaAbril + mediaMaio + mediaJunho)/6).toFixed(2)}`)