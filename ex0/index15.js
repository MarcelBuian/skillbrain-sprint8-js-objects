const user = { company: { name: 'SkillBrain' } };

// Metoda 1 de copiere a unui obiect
const copyOfUser = Object.assign({}, user);

// Metoda 2 de copiere a unui obiect:
const copyOfUser2 = JSON.parse(JSON.stringify(user));

// Metoda 3 de copiere a unui obiect
const copyOfUser3 = structuredClone(user);

user.time = "De culcare";


console.log(user);
console.log(copyOfUser);
console.log(copyOfUser2);
console.log(copyOfUser3);