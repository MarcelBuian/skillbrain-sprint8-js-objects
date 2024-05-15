const user = {
    email: 'inna@example.com',
    name: 'Inna',
    password: 'qwerty',
};

// Intr-un singur for putem accesa atat cheia cat si valoarea
const entries = Object.entries(user);

for (const [key, value] of entries) {
    console.log(`Key = ${key}, value = ${value}`);
}

for (const lista of entries) {
    [key, value] = lista;
    console.log(`Key = ${key}, value = ${value}`);
}


