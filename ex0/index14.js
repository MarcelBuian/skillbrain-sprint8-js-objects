// userul este un obiect {}
const user = {
    name: 'Gheo',
    married: true,
    age: 25,
    mere: 25,
    friends: ['Mircea', 'Mihai'],
    children: [
        { name: 'Mila', age: 1 },
        { name: 'Petr', age: 10 },
    ],
};

// Verificam daca exista valoarea 25 in obiectul user

// Cunoastem cheia
const condition1 = user.age === 25;
// console.log(condition1);

// Nu cunoastem cheia ex1
const condition2 = Object.values(user).includes(25);
// console.log(condition2);

// Nu cunoastem cheia ex2
const condition3 = Object.values(user).indexOf(25) > -1;
// console.log(condition3);

// Daca vrem sa returnam si cheia unde se afla acest 25.
// console.log(Object.keys(user)[2]);

const index = Object.values(user).indexOf(25);
const key = Object.keys(user)[index];
console.log(key);

// Daca vrem sa returnam toate cheile unde se afla 25:
const getKeysByValue = (expectedValue) => {
    const list = [];
    for (const key in user) {
        const value = user[key];
        if (expectedValue === value) {
            list.push(key)
        }
    }
    return list;
}
console.log(getKeysByValue(25));
