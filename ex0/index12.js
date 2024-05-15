// userul este un obiect {}
const user = {
    name: 'Gheo',
    married: true,
    age: 25,
};

// friends este o lista []
user.friends = ['Mircea', 'Mihai'];

user.children = [
    { name: 'Mila', age: 1 },
    { name: 'Petr', age: 10 },
];

// Ca sa tiparim "Peter" folosim:

console.log(user.children[1].name);
console.log(user.children[1]['name']);
// optional, se poate si asa:
console.log(user.children.at(1).name);



