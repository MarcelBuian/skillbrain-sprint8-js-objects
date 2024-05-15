const user = {
    email: 'inna@example.com',
    name: 'Inna',
    password: 'qwerty',
    functie_numere_pare: (n, index) => n % 2 === 0,
    ips: [1, 2, 3],
    logins: {
        ip: 1,
        date: "2024-05-15",
    }
};


console.log("Numele este: " + user.name);

console.log("Al doilea IP este: " + user.ips[1]);

console.log("Data din logins este: " + user.logins.date);

const lista = [1, 2, 3, 4, 5];

// const listaNumerePareClasic = lista.filter(function (numar) {
//     return numar % 2 === 0;
// });

const listaNumerePare = lista.filter(user.functie_numere_pare);

console.log(listaNumerePare);