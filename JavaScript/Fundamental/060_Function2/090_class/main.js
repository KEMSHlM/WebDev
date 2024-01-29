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

const bob = new Person('Bob', 18);
console.log(bob);