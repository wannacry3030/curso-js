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

const friends = ["ycaro", "peter", "joao"];

//add new elements to the array
const newLenght = friends.push("jay");
console.log(friends);
console.log(newLenght);
//add new elements to the array
friends.unshift("John");
console.log(friends);

//remove elements from the array
friends.pop(); //ultimo elemento
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //primeiro
console.log(friends);

console.log(friends.indexOf("peter"));
console.log(friends.indexOf("Bob"));

friends.push(50);
console.log(friends.includes("peter"));
console.log(friends.includes("Bob"));
console.log(friends.includes(50));

if (friends.includes("Steven"));
{
  console.log("Voce tem um amigo chamado Steven");
}

//CODING CHALLENGE #1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIJohn, BMIMark);

//CODING CHALLENGE #2
