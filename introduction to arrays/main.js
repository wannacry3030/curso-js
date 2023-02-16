//
const amigo1 = "ycaro";
const amigo2 = "peter";
const amigo3 = "joao";

const friends = ["ycaro", "peter", "joao"];
console.log(friends);

//acima fiz uma syntax literal, aqui embaixo chamei a função Array, a forma de cima é mais utilizada..
const years = new Array(1991, 1983, 2008, 2020);

console.log(friends[0]);
console.log(friends[1]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "jay";
console.log(friends);
//aqui nos mudamos uma const, o que acontece: apenas valores primitivos nao podem ser mudados, porem, uma array nao é um valor primitivo
