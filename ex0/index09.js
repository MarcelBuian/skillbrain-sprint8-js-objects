const user = {
    email: 'inna@example.com',
    name: 'Inna',
    password: 'qwerty',
};

// Destructurare la obiect:
({ email: a, name: b, password: c } = user);

console.log(a, b, c);
