var valor = parseFloat (prompt("Digite o valor a converter:") );
var porcentagem = parseInt(prompt("digite a porcentagem que deseja encontrar:"));

//converte o numero inteiro para decimal
// so e possivel achar a % usando numero decimal
var porcentagemDecimal = porcentagem / 100;
// multiplica o valor pela porcentagem para encontrar o resultado
var resultado = valor*porcentagemDecimal;
console.log("o resultado é: " + resultado);