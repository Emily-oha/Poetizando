// operadores.js

// 1. Faça a soma de 25 e 17
let soma = 25 + 17;
console.log("Soma de 25 e 17:", soma); // 42 
// Fiz a soma de 25 e 17 onde o resultado é 42

// 2. Subtraia 100 de 250
let subtracao = 250 - 100;
console.log("Subtração de 100 de 250:", subtracao); // 150
// Fiz a subtração entre os números 100 e 250 onde o resultado é 150

// 3. Multiplique 9 por 6
let multiplicacao = 9 * 6;
console.log("Multiplicação de 9 por 6:", multiplicacao); // 54
// Fiz a multiplioação dos números 9 e 6 onde o resultado é 54

// 4. Divida 144 por 12
let divisao = 144 / 12;
console.log("Divisão de 144 por 12:", divisao); // 12
// Dividi o número 144 pelo número 12 onde o resultado é 12

// 5. Calcule o resto da divisão entre 55 e 6
let resto = 55 % 6;
console.log("Resto da divisão entre 55 e 6:", resto); // 1
// Fiz a divisão entre os números 55 e 6 e descobri o resto 1

// 6. Crie uma variável x com valor 10 e incremente uma vez
let x = 10;
x++; // incremento
console.log("Valor de x após incremento:", x); // 11
// Adicionei o incremento 1 ao número 10 assim, somando (10+1) e achando o número 11

// 7. Crie uma variável y com valor 5 e decremente duas vezes
let y = 5;
y--; // primeiro decremento
y--; // segundo decremento
console.log("Valor de y após dois decrementos:", y); // 3
// Retirei dois valores do número 5 assim, subtraindo (5-2) e achando o número 3

// 8. Some 10 com 5, depois subtraia 3 e multiplique por 2
let resultado = (10 + 5 - 3) * 2;
console.log("Resultado da expressão:", resultado); // 24
// Resolvi primeiro os valores de soma e subtração entre os números 10, 5 e 3 dentro do parêntese, e depois multipliquei por 2

// 9. Faça a média de três números: 8, 7.5 e 10
let media = (8 + 7.5 + 10) / 3;
console.log("Média de 8, 7.5 e 10:", media); // 8.5
// Somei os três valores e em seguida, dividi pelo número de elementos, ou seja, 3

// 10. Crie duas variáveis a = 20, b = 5. Use a += b e a *= 2.
let a = 20;
let b = 5;
a += b; // a = a + b = 25
a *= 2; // a = a * 2 = 50
console.log("Valor final de a:", a); // 50
// Na primeira operação eu somei o valor a (20) com o valor b(5) e descori o valor 25
// Na segunda operação eu multipliquei o valor de a(25) com o número 2

// 11. 10 > 7
console.log(10 > 7); // true
// Consideração de 10 maior que 7

// 12. 5 <= 3
console.log(5 <= 3); // false
// Consideração de 5 menor que 3

// 13. 7 == '7' e 7 === '7'
console.log(7 == "7"); // true
console.log(7 === "7"); // false

// 14. 10 !== '10' e 10 != '10'
console.log(10 !== "10"); // true
console.log(10 != "10"); // false

// 15. (5 > 3) && (8 < 10)
console.log(5 > 3 && 8 < 10); // true

// 16. (5 < 3) || (8 === 8)
console.log(5 < 3 || 8 === 8); // true
// Consideração de 5 menor que 3

// 17. !(7 > 2)
console.log(!(7 > 2)); // false
// Consideração de 7 maior que 2

// 18. Comparação com e sem parênteses
console.log((4 + 3) * 2); // 14
console.log(4 + 3 * 2); // 10

// 19. 2 ** 4
console.log(2 ** 4); // 16

// 20. ((10 + 2) / 2) * 2
console.log(((10 + 2) / 2) * 2); // 36
// Na primerira operação somei 10 e o 2, logo após isso dividi por 2
// Logo depois multipliquei por 2

// 21. 4 + 4 == 2 * 4
console.log(4 + 4 == 2 * 4); // true
// Na primerira operação somei 4 com 4 e realizei a multiplicação de 2 por 4

// 22. Expressão que retorna false
console.log(5 == 5 && !(3 == 3)); // false
// Na primeira operação realizei a comparação de 5 e depois 3

// 23. Expressão que retorna true
console.log(1 !== 2 || 5 !== 5 || 3 == 3 || 0 !== 0); // true
// Verifica se os dois operandos não são iguais, retornando um resultado booleano nos 4 casos

// 24. 5 + 3 * 2 ** 2
let resultado24 = 5 + 3 * 2 ** 2;
console.log(resultado24); // 17
// Na primeira operação realizei a soma de 5 e 3 e multipliquei por 2
// Logo depois multipliquei por 2

// 25. r += 2 * 4 e depois r /= 2
let r = 3;
r += 2 * 4; // r = 11
r /= 2; // r = 5.5
console.log(r);
// Na primeira operação multipliquei 2 e 4 e dividi por 2

// 26. Juntar strings
let nome = "Ana";
let sobrenome = "Silva";
let nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto); // Ana Silva

// 27. ("5" + 5) == 55
console.log("5" + 5 == 55); // true
// Na primeira operação somei 5 com 5, considerando o "5"

// 28. true && false || true
console.log((true && false) || true); // true

// 29. Expressão que resulta em true
console.log(3 + 2 == 5 && 10 > 2); // true

// 30. Avaliação completa
let resultado30 = 10 + 5 * 2 > 30 / 2 && !false;
// 5 * 2 = 10 → 10 + 10 = 20 → 30 / 2 = 15 → 20 > 15 = true → true && true = true
// Somei 10 e 5, logo após multipliquei por 2 e dividi por 2
// Obtivi um resultado maior que 30 (considerando os cálculos em geral)
console.log(resultado30); // true
