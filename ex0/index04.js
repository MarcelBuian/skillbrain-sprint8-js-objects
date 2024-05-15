const user = {
    email: 'inna@example.com',
    name: 'Inna',
    password: 'qwerty',
};

// Modificarea unei valori a unei proprietati dintr-un obiect
user.name = "Emilia";

console.log(user);

// Afisarea proprietatii unui obiect:
console.log(user.name);
console.log(user['name']);

let key = "name";

console.log(user[key]);

key = "email";


console.log(user[key]);
