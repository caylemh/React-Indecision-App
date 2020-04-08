// arguments object no longer bound with arrow functions

/*const add = (a, b) => {
    console.log(arguments);
    return a + b;
};

console.log(add(55,1));
*/

// this keyword - no longer bound

const user = {
    name: 'Caylem',
    cities: ['JHB', 'Wolverhampton', 'Ipswich'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

// Challenge Area

const multiplier = {
    numbers: [2,4,6],
    multiplyBy: 4,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply()); 