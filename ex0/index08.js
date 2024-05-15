// Destructurarea:

let a, b, rest, lista;

// Clasic:
// lista = [10, 20];
// a = lista[0];
// b = lista[1];

// Destructurare (in 2 linii):
// lista = [10, 20];
// [a, b] = lista;

// Destructurare:
[a, b] = [10, 20];

console.log("a = " + a);
console.log("b = " + b);