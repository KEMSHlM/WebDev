function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.hello = function() {
    console.log('Person: hello ' + this.name);
}

// 継承の仕方．
function Japanese(name, age) {
    Person.call(this, name, age);
}

Japanese.prototype.hello = function() {
    console.log('Japanese: hello ' + this.name);
}

Japanese.prototype = Object.create(Person.prototype);
const taro = new Japanese('Taro', 23);
console.log(taro);
taro.hello(); // -> Japanese: hello Taro
// Japanese -> Person -> Object -> null