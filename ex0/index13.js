const obj = {
    a: {
        b: {
            c: {
                key: 'value'
            },
            e: [1, 2],
        }
    }
};

// Nu se duce in adancime mai mult decat 3 nivele:
console.log(obj);

// In cazul obj.a avem fix 3 nivele, iar console.log() ne va arata intreg obiectul:
console.log(obj.a);

// Totusi e poate afisa intreg obiectul cu mai mult de 3 nivele folosind functia JSON:
console.log(JSON.stringify(obj));