//1. //
let numero = parseInt(prompt("Digite um número inteiro:"));

if (numero % 2 === 0) {
    alert("O número é PAR.");
} else {
    alert("O número é ÍMPAR.");
}

//2. //
let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
let num3 = parseFloat(prompt("Digite o terceiro número:"));

let maior;

if (num1 > num2 && num1 > num3) {
    maior = num1;
} else if (num2 > num1 && num2 > num3) {
    maior = num2;
} else {
    maior = num3;
}

//3. //
let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    alert("Aluno aprovado! Média: " + media.toFixed(2));
} else {
    alert("Aluno reprovado. Média: " + media.toFixed(2));
}


alert("O maior número é: " + maior);


//4. //
let anoNascimento = parseInt(prompt("Digite seu ano de nascimento:"));
let anoAtual = new Date().getFullYear();
let idade = anoAtual - anoNascimento;

if (idade >= 18) {
    alert("Você é maior de idade.");
} else {
    alert("Você é menor de idade.");
}

//5.//
let escolha = prompt("Digite 'C' para converter de Celsius para Fahrenheit ou 'F' para converter de Fahrenheit para Celsius:");

if (escolha === "C" || escolha === "c") {
    let celsius = parseFloat(prompt("Digite a temperatura em Celsius:"));
    let fahrenheit = (celsius * 9/5) + 32;
    alert("Temperatura em Fahrenheit: " + fahrenheit.toFixed(2));
} else if (escolha === "F" || escolha === "f") {
    let fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit:"));
    let celsius = (fahrenheit - 32) * 5/9;
    alert("Temperatura em Celsius: " + celsius.toFixed(2));
} else {
    alert("Opção inválida.");
}


//6.//
let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));

if (num1 % num2 === 0 || num2 % num1 === 0) {
    alert("Pelo menos um dos números é múltiplo do outro.");
} else {
    alert("Nenhum dos números é múltiplo do outro.");
}
