// ES6からClassが導入された
// Prototypw Chain
class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    hello() {
        console.log('class: hello ' + this.name);
    }
}

class Japanese extends Person {
    constructor (name, age, gender) {
        super(name, age);
        this.gender = gender;
    }

    hello() {
        console.log('Japanese: hello ' + this.name);
    }
    hello() {
        console.log('Japanese: bye ' + this.name);
    }
}

const bob = new Japanese('Bob', 23, 'Male');
console.log(bob);