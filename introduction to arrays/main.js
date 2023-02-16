//
const amigo1 = "ycaro";
const amigo2 = "peter";
const amigo3 = "joao";

const friends = ["ycaro", "peter", "joao"];
console.log(friends);

//acima fiz uma syntax literal, aqui embaixo chamei a função Array, a forma de cima é mais utilizada..
const y = new Array(1991, 1983, 2008, 2020);

console.log(friends[0]);
console.log(friends[1]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "jay";
console.log(friends);
//aqui nos mudamos uma const, o que acontece: apenas valores primitivos nao podem ser mudados, porem, uma array nao é um valor primitivo

const primeiroNome = "Lucas";
const lucas = [primeiroNome, "oliveira", 2023 - 1996, "desenvolvedor", friends];
console.log(lucas);
console.log(lucas.length);

//exercicio de array (abaixo)
const calcAge = function (birthYear) {
  return 2023 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
