const user = {
    email: 'inna@example.com',
    name: 'Inna',
    password: 'qwerty',
};

// Parcurgerea unui obiect:
for (const key in user) {
    console.log(key + " are valoarea: " + user[key]);
}

// Pentru a primi lista de chei din obiect:
const listKeys = Object.keys(user);
console.log(listKeys);

// Parcurgerea unui obiect folosind lista:
for (const key of listKeys) {
    console.log(key + " are valoarea: " + user[key]);
}

// Pentru a primi lista de valori din obiect:
const listValues = Object.values(user);
console.log(listValues);
