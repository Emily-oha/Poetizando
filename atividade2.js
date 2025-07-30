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

//5. //
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


//6. //
let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));

if (num1 % num2 === 0 || num2 % num1 === 0) {
    alert("Pelo menos um dos números é múltiplo do outro.");
} else {
    alert("Nenhum dos números é múltiplo do outro.");
}

//7. //
let lado1 = parseFloat(prompt("Digite o valor do primeiro lado:"));
let lado2 = parseFloat(prompt("Digite o valor do segundo lado:"));
let lado3 = parseFloat(prompt("Digite o valor do terceiro lado:"));

if (
    lado1 + lado2 > lado3 &&
    lado1 + lado3 > lado2 &&
    lado2 + lado3 > lado1
) {
    if (lado1 === lado2 && lado2 === lado3) {
        alert("Triângulo Equilátero");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        alert("Triângulo Isósceles");
    } else {
        alert("Triângulo Escaleno");
    }
} else {
    alert("Os valores informados não formam um triângulo válido.");
}

//8. //
let prato = prompt("Escolha um prato: pizza, hamburguer, salada ou macarrao").toLowerCase();

switch (prato) {
    case "pizza":
        alert("Você escolheu Pizza.\nPreço: R$ 35,00\nDescrição: Massa artesanal com molho de tomate e queijo.");
        break;
    case "hamburguer":
        alert("Você escolheu Hambúrguer.\nPreço: R$ 25,00\nDescrição: Pão artesanal com carne bovina e queijo cheddar.");
        break;
    case "salada":
        alert("Você escolheu Salada.\nPreço: R$ 18,00\nDescrição: Mix de folhas verdes com legumes frescos.");
        break;
    case "macarrao":
        alert("Você escolheu Macarrão.\nPreço: R$ 28,00\nDescrição: Espaguete ao molho bolonhesa com parmesão.");
        break;
    default:
        alert("Opção inválida. Por favor, escolha um prato do menu.");
}

//9. //
let peso = parseFloat(prompt("Digite seu peso (em kg):"));
let altura = parseFloat(prompt("Digite sua altura (em metros):"));

let imc = peso / (altura * altura);
let classificacao = "";

if (imc < 18.5) {
    classificacao = "Abaixo do peso";
} else if (imc >= 18.5 && imc < 25) {
    classificacao = "Peso normal";
} else if (imc >= 25 && imc < 30) {
    classificacao = "Sobrepeso";
} else {
    classificacao = "Obesidade";
}

alert("Seu IMC é: " + imc.toFixed(2) + "\nClassificação: " + classificacao);

//10. //
let numero = parseInt(prompt("Digite um número inteiro positivo:"));

if (isNaN(numero) || numero < 0) {
    alert("Por favor, digite um número positivo válido.");
} else {
    let i = 0;
    let pares = "";

    while (i <= numero) {
        if (i % 2 === 0) {
            pares += i + " ";
        }
        i++;
    }

    alert("Números pares de 0 até " + numero + ":\n" + pares);
}


//11. //
let numero = parseInt(prompt("Digite um número positivo:"));

if (numero >= 0) {
  console.log("Números ímpares de 0 até", numero, ":");
  for (let i = 0; i <= numero; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
} else {
  console.log("Número inválido! Insira um número positivo.");
}

//12. //
let numero = parseInt(prompt("Digite um número para calcular o fatorial:"));
let fatorial = 1;

if (numero < 0) {
  console.log("Não existe fatorial de número negativo!");
} else {
  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }
  console.log("Fatorial de", numero, "é:", fatorial);
}

//13. //
let numeroSecreto = Math.floor(Math.random() * 101); // entre 0 e 100
let tentativas = 10;

console.log("Jogo da adivinhação! Você tem 10 tentativas.");

for (let i = 1; i <= tentativas; i++) {
  let palpite = parseInt(prompt(`Tentativa ${i}: Digite seu palpite (0 a 100):`));

  if (palpite === numeroSecreto) {
    console.log(`Parabéns! Você acertou o número secreto (${numeroSecreto}) na tentativa ${i}.`);
    break;
  } else if (palpite < numeroSecreto) {
    console.log("O número secreto é MAIOR.");
  } else {
    console.log("O número secreto é MENOR.");
  }

  if (i === tentativas) {
    console.log(`Acabaram as tentativas! O número secreto era: ${numeroSecreto}.`);
  }
}
