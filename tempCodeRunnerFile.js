const leia = require ('readline-sync')

// Definição Variáveis
let salario, abono, novoSalario

salario = leia.questionFloat(" \n Digite o salário: ")
abono = leia.questionFloat(" \n Digite o abono: ")

novoSalario = salario + abono
console.log("Novo salario: ", novoSalario)