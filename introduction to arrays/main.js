// //
// const amigo1 = "ycaro";
// const amigo2 = "peter";
// const amigo3 = "joao";

// const friends = ["ycaro", "peter", "joao"];
// console.log(friends);

// //acima fiz uma syntax literal, aqui embaixo chamei a função Array, a forma de cima é mais utilizada..
// const y = new Array(1991, 1983, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[1]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "jay";
// console.log(friends);
// //aqui nos mudamos uma const, o que acontece: apenas valores primitivos nao podem ser mudados, porem, uma array nao é um valor primitivo

// const primeiroNome = "Lucas";
// const lucas = [primeiroNome, "oliveira", 2023 - 1996, "desenvolvedor", friends];
// console.log(lucas);
// console.log(lucas.length);

// //exercicio de array (abaixo)
// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

//

// const friends = ["ycaro", "peter", "joao"];

// //add new elements to the array
// const newLenght = friends.push("jay");
// console.log(friends);
// console.log(newLenght);
// //add new elements to the array
// friends.unshift("John");
// console.log(friends);

// //remove elements from the array
// friends.pop(); //ultimo elemento
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); //primeiro
// console.log(friends);

// console.log(friends.indexOf("peter"));
// console.log(friends.indexOf("Bob"));

// friends.push(50);
// console.log(friends.includes("peter"));
// console.log(friends.includes("Bob"));
// console.log(friends.includes(50));

// if (friends.includes("Steven"));
// {
//   console.log("Voce tem um amigo chamado Steven");
// }

// //CODING CHALLENGE #1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIJohn, BMIMark, markHigherBMI);

// //CODING CHALLENGE #2
// //15% do valor da conta se  a conta for entre 50 e 300, se o valor for diferente, 20%
// //1
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// //2
// const bills = [125, 555, 44];

// //3
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// //4 somando o total em arrays
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);

// //praticando de novo
// const calcGorjeta = function (conta) {
//   return conta >= 50 && conta <= 300 ? conta * 0.15 : conta * 0.2;
// };
console.log();
// const contas = [275, 40, 430];
// const gorjetas = [
//   calcGorjeta(contas[0]),
//   calcGorjeta(contas[1]),
//   calcGorjeta(contas[2]),
// ];

// const contasgorjetas = [41.25, 8, 86];

// const go1 = 275 + 41.25;
// const go2 = 40 + 8;
// const go3 = 430 + 86;
// const gos = [316.25, 48, 516];

// const res1 =
//   "A conta foi " +
//   contas[0] +
//   " a gorjeta foi " +
//   contasgorjetas[0] +
//   " e o total ficou " +
//   gos[0];

// const res2 =
//   "A conta foi " +
//   contas[1] +
//   " a gorjeta foi " +
//   contasgorjetas[1] +
//   " e o total ficou " +
//   gos[1];

// const res3 =
//   "A conta foi " +
//   contas[2] +
//   " a gorjeta foi " +
//   contasgorjetas[2] +
//   " e o total ficou " +
//   gos[2];

// console.log(go1, go2, go3);
// console.log(contas, gorjetas);
// console.log(res1);
// console.log(res2);
// console.log(res3);

/////////// OBJETOS:
////////// OBJETO TALVEZ SEJA A PARTE MAIS IMPORTANTE DO JAVASCRIPT, O OBJETO É  UM SEGUNDA FORMA DE GUARDAR INFORMAÇÕES DENTRO DE UM BLOCO DE DADOS, A DIFERENÇA ENTRE UM ARRAY E OBJETO É QUE: NO ARRAY, OS ITENS FICAM E ORDEM NUMERICA, JA NO OBJETO, NAO IMPORTA A ORDEM DOS DADOS, POIS ELES TEM UMA DESCRIÇÃO VINCULADA A ELES
//EXEMPLO:::::

// const Jonas = {
//   firstName: "Jonas",
//   secondName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["michael", "peter", "Steven"],
// };
// console.log(Jonas);

// //chamando um dado do objeto, usando PONTO
// console.log(Jonas.job);
// console.log(Jonas["job"]);

// //utilizando bracket notation pra mostrar um objeto, o bracket notation vai buscar uma propriedade que foi definida em um objeto, exemplos abaixo:
// const nameKey = "Name";
// console.log(Jonas["first" + nameKey]);
// console.log(Jonas["second" + nameKey]);

// //exemplo:
// const interestedIn = prompt(
//   "O que voce quer saber sobre Jonas? Escolha entre: firstName, secondName, age, job, friends;"
// );

// if (Jonas[interestedIn]) {
//   console.log(Jonas[interestedIn]);
// } else {
//   console.log(
//     "Pedido invalido, por favor, Escolha entre: firstName, secondName, age, job, friends;"
//   );
// }

// ///desafio
// // "Jonas tem 3 amigos, e o melhor amigo dele se chama Michael"
// console.log(
//   `${Jonas.firstName} tem ${Jonas.friends.length} amigos, e o melhor amigo dele se chama ${Jonas.friends[0]}`
// );

// const Jonas = {
//   firstName: "Jonas",
//   secondName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["michael", "peter", "Steven"],
//   hasDriversLicense: true,

//   // calcAge: function (birthYear) {
//   //   return 2023 - birthYear;
//   // },

//   // calcAge: function () {
//   //   return 2023 - this.birthYear;
//   // },

//   calcAge: function () {
//     this.age = 2023 - this.birthYear;
//     return this.age;
//   },
// };
// console.log(Jonas.calcAge());
// console.log(Jonas.age);
// console.log(Jonas.age);
// console.log(Jonas.age);

//DESAFIO
//'Jonas é um professor de 32 anos de idade, e ele tem uma CNH'

// const lucas = {
//   pnome: "lucas",
//   snome: "oliveira",
//   trabalho: "desenvolvedor",
//   nascimento: "1996",
//   carteiraCnh: false,

//   chall1: function () {
//     this.idade = 2023 - this.nascimento;
//     if (this.carteiraCnh == true) {
//       console.log(
//         `${this.pnome} é um ${this.trabalho} de ${this.idade} anos, e ele tem uma CNH!`
//       );
//     } else {
//       console.log(
//         `${this.pnome} é um ${this.trabalho} de ${this.idade} anos, e ele não tem uma CNH! :/`
//       );
//     }
//   },
//   // forma otimizada de escrever esse desafio:
//   getSumario: function () {
//     return `${this.pnome} é um ${this.trabalho} de ${this.idade} anos, e ele ${
//       this.carteiraCnh ? "tem" : "nao tem"
//     } uma CNH`;
//   },
// };
// console.log(lucas.chall1());
// console.log(lucas.getSumario());

//DESAFIO 3
//CODING CHALLENGE #1
// const obMark = {
//   nome: "Mark Miller",
//   peso: 78,
//   altura: 1.69,
//   calcBMI: function () {
//     this.bmi = this.peso / this.altura ** 2;
//     return this.bmi;
//   },
// };

// const obJohn = {
//   nome: "John Smith",
//   peso: 92,
//   altura: 1.95,
//   calcBMI: function () {
//     this.bmi = this.peso / this.altura ** 2;
//     return this.bmi;
//   },
// };

// obMark.calcBMI();
// obJohn.calcBMI();
// console.log(obJohn.bmi, obMark.bmi);

// if (obMark.bmi > obJohn.bmi) {
//   console.log(
//     `o BMI ${obMark.bmi} de ${obMark.nome} é maior que o BMI ${obJohn.bmi} de ${obJohn.nome}`
//   );
// } else {
//   console.log(
//     `o BMI ${obJohn.johnBM} de ${obJohn.nome} é maior que o BMI ${obMark.markBMI} de ${obMark.nome}`
//   );
// }

//FOR LOOPS:::

// console.log('Levantando peso repetição 1')
// console.log('Levantando peso repetição 2')
// console.log('Levantando peso repetição 3')
// console.log('Levantando peso repetição 4')
// console.log('Levantando peso repetição 5')
// console.log('Levantando peso repetição 6')
// console.log('Levantando peso repetição 7')
// console.log('Levantando peso repetição 8')
// console.log('Levantando peso repetição 9')
// console.log('Levantando peso repetição 10')

//um loop continua rodando enquanto a condição for verdadeira:
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Levantando peso repetição ${rep}`);
// }

//exemplo de array loop:::
// const lucas = [
//   "Lucas",
//   "oliveira",
//   2023 - 1996,
//   "desenvolvedor",
//   ["pedro", "ycaro", "joao"],
//   true,
// ];
// const types = [];

// for (let i = 0; i < lucas.length; i++) {
//   //lendo do array lucas:
//   console.log(lucas[i], typeof lucas[i]);

//   //array com tipos diferentes de variaveis::
//   // types[i] = typeof lucas[i];

//   //adicionando um elemento ao array: (essa forma é mais clean)
//   types.push(typeof lucas[i]);
// }

// console.log(types);

// const anos = [1951, 1980, 1996, 2020];
// const idades = [];

// for (let i = 0; i < anos.length; i++) {
//   idades.push(2023 - anos[i]);
// }
// console.log(idades);

// //CONTINUE AND BREAK STATEMENTS::
// //CONTINUE: continue é usado pra passar a iteração atual do loop e continuar para a proxima,
// //BREAK: break é usado para terminar  completamente o loop..
// //exeplos:

// console.log("===SOMENTE STRINGS===");
// for (let i = 0; i < lucas.length; i++) {
//   //continue statement:
//   if (typeof lucas[i] !== "string") continue;

//   console.log(lucas[i], typeof lucas[i]);
// }

// console.log("===BREAK COM NUMERO===");
// for (let i = 0; i < lucas.length; i++) {
//   //break statement:
//   if (typeof lucas[i] === "number") break;

//   console.log(lucas[i], typeof lucas[i]);
// }

// const lucas = [
//   "Lucas",
//   "oliveira",
//   2023 - 1996,
//   "desenvolvedor",
//   ["pedro", "ycaro", "joao"],
//   true,
// ];

// //fazendo um loop do final pro começo (backwards)
// for (let i = lucas.length - 1; i >= 0; i--) {
//   console.log(i, lucas[i]);
// }

// //CRIANDO UM LOOP DENTRO DE UM LOOP
// for (let exercicios = 1; exercicios < 4; exercicios++) {
//   console.log(`------começando exercicio ${exercicios}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(
//       `exercicio ${exercicios}: repetição de levantamento de peso N: ${rep}`
//     );
//   }
// }

//explorando o WHILE LOOP:
// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: Levantando pesos -repetições- ${rep}`);
//   rep++;
// }

// let dado = Math.trunc(Math.random() * 6) + 1;
// // console.log(dado);

// while (dado !== 6) {
//   console.log(`Voce rodou um ${dado}`);
//   dado = Math.trunc(Math.random() * 6) + 1;
//   if (dado === 6) console.log("o Loop vai parar agora...");
// }

//FINAL CHALLENGE fundamentals:
//primeiro criar uma array chamado BILL que ira conter as 10 BILLS de teste
//2: criar arrays vazios para o TIPS e TOTALS ('tips' e 'totals')
//3: use a 'calcTip' function que escrevemos anteriormente (nao precisa repetir) para calcular os TIPS e TOTALS (BILL + TIP) para cada valor BILL no array BILLS. use um FOR loop para fazer os 10 calculos!
//TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

//DICA: chame o calcTip dentro do loop e use o metodo PUSH pra adicionar um valor ao array TIPS e TOTALS :D

//15% do valor da conta se  a conta for entre 50 e 300, se o valor for diferente, 20%
//1
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

//2
// const bills = [125, 555, 44];

// //3
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// //4 somando o total em arrays
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);

//criando o array com as 10 contas
// const contas = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// //criando arrays vazios para TIPS e TOTALS
// const gorjeta = [];
// const total = [];

// //reutilizando a função calctip
// const calcGorjeta = function (conta) {
//   return conta >= 50 && conta <= 300 ? conta * 0.15 : conta * 0.2;
// };
// //MINHA SOLUÇÃO
// // for (let i = 0; i < contas.length; i++) {
// //   gorjeta.push(calcGorjeta(contas[i]));
// //   total.push(gorjeta[i] + contas[i]);
// //   console.log(contas, gorjeta, total);
// // }
// // console.log(contas[i]);

// //SOLUÇÃO DO PROFESSOR
// for (let i = 0; i < contas.length; i++) {
//   const tip = calcGorjeta(contas[i]);
//   gorjeta.push(tip);
//   total.push(tip + contas[i]);
// }
// console.log(contas, gorjeta, total);

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // C : consertando o bug
    // value: Number(prompt("Degrees celsius:")),
    value: 10,
  };

  // B : achando o bug
  console.log(measurement.value);
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A : identificando o bug
console.log(measureKelvin());

const calcTempAmplitudebug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudebug = calcTempAmplitudebug([3, 5, 1], [9, 0, 5]);
console.log(amplitudebug);
