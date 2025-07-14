// 1. Soma de 25 e 17
let soma = 25 + 17;
console.log(soma); // 42

// 2. Subtraia 100 de 250
let subtracao = 250 - 100;
console.log(subtracao); // 150

// 3. Multiplique 9 por 6
let multiplicacao = 9 * 6;
console.log(multiplicacao); // 54

// 4. Divida 144 por 12
let divisao = 144 / 12;
console.log(divisao); // 12

// 5. Resto da divisão entre 55 e 6
let resto = 55 % 6;
console.log(resto); // 1

// 6. x com valor 10 e incremento
let x = 10;
x++;
console.log(x); // 11

// 7. y com valor 5 e decremento duas vezes
let y = 5;
y--;
y--;
console.log(y); // 3

// 8. (10 + 5 - 3) * 2
let resultado8 = (10 + 5 - 3) * 2;
console.log(resultado8); // 24

// 9. Média de 8, 7.5 e 10
let media = (8 + 7.5 + 10) / 3;
console.log(media); // 8.5

// 10. a += b e a *= 2
let a = 20;
let b = 5;
a += b;
a *= 2;
console.log(a); // 50

// 11. 10 > 7
console.log(10 > 7); // true

// 12. 5 <= 3
console.log(5 <= 3); // false

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

// 17. !(7 > 2)
console.log(!(7 > 2)); // false

// 18. Comparação com e sem parênteses
console.log((4 + 3) * 2); // 14
console.log(4 + 3 * 2); // 10

// 19. 2 ** 4
console.log(2 ** 4); // 16

// 20. ((10 + 2) / 2) ** 2
console.log(((10 + 2) / 2) ** 2); // 36

// 21. 4 + 4 == 2 * 4
console.log(4 + 4 == 2 * 4); // true

// 22. Expressão que retorna false
console.log(5 == 5 && !(3 == 3)); // false

// 23. Expressão que retorna true
console.log(1 !== 2 || 5 !== 5 || 3 == 3 || 0 !== 0); // true

// 24. 5 + 3 * 2 ** 2
let resultado24 = 5 + 3 * 2 ** 2;
console.log(resultado24); // 17

// 25. r += 2 * 4 e depois r /= 2
let r = 3;
r += 2 * 4; // r = 11
r /= 2; // r = 5.5
console.log(r);

// 26. Juntar strings
let nome = "Ana";
let sobrenome = "Silva";
let nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto); // Ana Silva

// 27. ("5" + 5) == 55
console.log("5" + 5 == 55); // true

// 28. true && false || true
console.log((true && false) || true); // true

// 29. Expressão que resulta em true
console.log(3 + 2 == 5 && 10 > 2); // true

// 30. Avaliação completa
let resultado30 = 10 + 5 * 2 > 30 / 2 && !false;
// 5 * 2 = 10 → 10 + 10 = 20 → 30 / 2 = 15 → 20 > 15 = true → true && true = true
console.log(resultado30); // true
