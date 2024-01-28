// コンストラクタ関数は，関数名の先頭を大文字にするのが慣習
function Person(name, age) {
    this.name = name;
    this.age = age;
    // this.hello = function() {
    //     console.log('Hello ' + this.name);
    // }
}

Person.prototype.hello = function() {
    console.log('Hello ' + this.name);
}

const bob = new Person('Bob', 18);
const tom = new Person('Tom', 33);
const sun = new Person('Sun', 20);

bob.hello();
tom.hello();
sun.hello();

//　ここで，bob.__proto__ === Person.prototype が成り立つ．
// そのため，__proto__がfunction() { .. }のオブジェクトへの参照を保持していることになる．
// prototypeを使うと，メモリの節約になる
