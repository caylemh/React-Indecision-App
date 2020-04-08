let nameVar = 'Caylem';
console.log('nameVar', nameVar);

// 'let' can be reassigned but not redefined
let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

// 'const' cannot be redfined or reassigned
const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block Scoping - 'let' and 'const' only work within their local blocks and are not accesable outside of the block
const fullName = 'Caylem Harris';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);