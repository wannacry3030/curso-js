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

const Jonas = {
  firstName: "Jonas",
  secondName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["michael", "peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2023 - birthYear;
  // },

  // calcAge: function () {
  //   return 2023 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
};
console.log(Jonas.calcAge());
console.log(Jonas.age);
console.log(Jonas.age);
console.log(Jonas.age);

//DESAFIO
//'Jonas é um professor de 32 anos de idade, e ele tem uma CNH'

const lucas = {
  pnome: "lucas",
  snome: "oliveira",
  nascimento: "1996",
  carteiraCnh: False,

  chall1: function() {
    if (this.carteiraCnh) true {
      console.log("ok")
    }
  }
}