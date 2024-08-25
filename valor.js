//Elabore um programa que:
//solicite o nome do produto
//solicite a quantidade vendida
//solicite o valor do produto
//apresente o valor total
//solicite a % de desconto
//apresente o R$ total de desconto
//apresente o valor total da venda depois do desconto

var nomeDoProduto  = prompt("Digite o nome do produto:") ;
var quantidadeVendida = parseInt (prompt("Digite a quantidade vendida: ") );
var valorDoProduto = parsefloat(prompt("Digite o valor do produto: ") );
var valorTotal = quantidadeVendida * valorDoProduto;
console.log ("O valor total é: " + " R$ " + valorTotal);
 

