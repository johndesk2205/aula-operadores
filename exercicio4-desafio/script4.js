const nome =  `Pedrinho da Silva`
const cpf = `000.000.000-00`
const dataDeNascimento = `10 / 02 /1990`
const endereco = `Rua dos bobos nº 0`
const filhos = 2
const cargo = `Vendedor`
const salarioFixo = 2000
let comissao = 0.1
const auxilioCreche = 45.50 * filhos
const vendasJaneiro = 5784.50
const vendasFevereiro = 3418.41
const vendasMarco =  4124.10
const vendasAbril =  1874
const vendasMaio = 7000
const vendasJunho = 9450
let descInss = 0.05

const comissaoJaneiro = vendasJaneiro * comissao
const comissaoFevereiro = vendasFevereiro * comissao
const comissaoMarco = vendasMarco * comissao
const comissaoAbril = vendasAbril * comissao
const comissaoMaio = vendasMaio * comissao
const comissaoJunho = vendasJunho * comissao

const salarioBrutoJaneiro = salarioFixo + comissaoJaneiro
const salarioBrutoFevereiro = salarioFixo + comissaoFevereiro
const salarioBrutoMarco = salarioFixo + comissaoMarco
const salarioBrutoAbril = salarioFixo + comissaoAbril
const salarioBrutoMaio = salarioFixo + comissaoMaio
const salarioBrutoJunho = salarioFixo + comissaoJunho


const descInssJaneiro = (salarioFixo + comissaoJaneiro) * descInss
const descInssFevereiro = (salarioFixo + comissaoFevereiro) * descInss
const descInssMarco = (salarioFixo + comissaoMarco) * descInss
const descInssAbril = (salarioFixo + comissaoAbril) * descInss
const descInssMaio = (salarioFixo + comissaoMaio) * descInss
const descInssJunho = (salarioFixo + comissaoJunho) * descInss




// Calcule:
// 1) O salário fixo mais o auxílio creche.

let salarioFixoAux = salarioFixo + auxilioCreche
console.log(`O salário fixo mais o auxílio creche é : ${salarioFixoAux}`);

// 2) Quanto Pedrinho da Silva receberá de comissão em janeiro (dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2).

console.log(`Pedrinho da Silva Receberá, ${comissaoJaneiro} em janeiro.`)

// 3) Quanto de Pedrinho da Silva será descontado em janeiro pelo INSS (o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas).

console.log(`O valor que será descontado pelo INSS em janeiro sera:` + descInssJaneiro)

// 4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos, ou seja, o valor líquido(Lembrando que o INSS só é descontado sobre o valor de salário mais a comissão).
// salariofixo+comissaojaneiro = desinssjan

const salarioLiquidoJaneiro = (salarioBrutoJaneiro - descInssJaneiro) + auxilioCreche
console.log(`Valor do salário líquido de Pedrinho da Silva em Janeiro foi:` + salarioLiquidoJaneiro);
const salarioLiquidoFevereiro = (salarioBrutoFevereiro - descInssFevereiro) + auxilioCreche
console.log(`Valor do salário líquido de Pedrinho da Silva em Fevereiro foi:` + salarioLiquidoFevereiro);
const salarioLiquidoMarco = (salarioBrutoMarco - descInssMarco) + auxilioCreche
console.log(`Valor do salário líquido de Pedrinho da Silva em Março foi:` + salarioLiquidoMarco);
const salarioLiquidoAbril = (salarioBrutoAbril - descInssAbril) + auxilioCreche
console.log(`Valor do salário líquido de Pedrinho da Silva em Abril foi:` + salarioLiquidoAbril);
const salarioLiquidoMaio = (salarioBrutoMaio - descInssMaio) + auxilioCreche
console.log(`Valor do salário líquido de Pedrinho da Silva em Maio foi:` + salarioLiquidoMaio);
const salarioLiquidoJunho = (salarioBrutoJunho - descInssJunho) + auxilioCreche
console.log(`Valor do salário líquido de Pedrinho da Silva em Junho foi:` + salarioLiquidoJunho);

// 5) A média do salário líquido em  seis meses (de janeiro a junho).

const mediaDoSalario = (salarioLiquidoJaneiro + salarioLiquidoFevereiro + salarioLiquidoMarco + salarioLiquidoAbril + salarioLiquidoMaio + salarioLiquidoJunho) / 6;
console.log(`A média do salário líquido de Pedrinho da silva em 6 meses foi:` + mediaDoSalario)


