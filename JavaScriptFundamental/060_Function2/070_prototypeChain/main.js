// Prototypw Chain
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.hello = function() {  
        console.log('Own: hello ' + this.name);
    }
}

Person.prototype.hello = function() {
     console.log('Perosn: hello ' + this.name);
}

Object.prototype.hello = function() {
    console.log('Object: hello ' + this.name);
}

const bob = new Person('Bob', 18);
bob.hello(); // -> Own: hello Bob

// これは，this.hello -> Peron.prototype -> Object.prototype の順番に探しに行く
// 