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
// bob.hello()は，関数の参照なので，関数を渡してやる必要がある．
setTimeout(bob.hello.bind(bob), 1000);
setTimeout(function() {
    bob.hello();
}, 1000);