// Să vedem un exemplu. Să implementăm o funcție `findKeys()`, care returnează o listă de chei, a căror valoare este egală cu valoarea indicată:

//     `const lessonMembers = {
//       syntax: 3,
//       using: 2,
//       foreach: 10,
//       operations: 10,
//       destructuring: 2,
//       array: 2,
//     };

//     findKeys(lessonMembers, 10); // ['foreach', 'operations']
//     findKeys(lessonMembers, 3);  // ['syntax']`


const lessonMembers = {
    syntax: 3,
    using: 2,
    foreach: 10,
    operations: 10,
    destructuring: 2,
    array: 2,
};

function findKeys(obj, expectedValue) {
    const list = [];

    for (const key in obj) {
        const value = obj[key];
        if (value === expectedValue) {
            list.push(key);
        }
    }

    return list;
}

// Varianta 2 din curs
// const findKeys = (obj, expectedValue) => {
//     const result = [];

//     const entries = Object.entries(obj);
//     for (const [key, value] of entries) {
//         if (value === expectedValue) {
//             result.push(key);
//         }
//     }

//     return result;
// };

const listA = findKeys(lessonMembers, 10);
// ['foreach', 'operations']
console.log(listA);

const listB = findKeys(lessonMembers, 3);
// ['syntax']
console.log(listB);