class C {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
}

const obj = new C(1, 2);
console.log(obj);
const obj2 = Reflect.construct(C, [1, 2]);
console.log(obj2);

console.log('c' in obj);
console.log(Reflect.has(obj, 'c'));

// Objectより推奨される．
// できなかったら，Falseを返すので条件式に渡すことができる．
// if (Reflect.defineProperty) {
// 
// } else {
//     
// }
// 
const bob = {
    name: 'Bob',
    _hello: function() {
        console.log(`Hello ${this.name}`);
    }
}

const tom = {
    name: 'Tom',
    _hello: function() {
        console.log(`Hello ${this.name}`);
    },
    get hello() {
        console.log(this);
        return this._hello();
    },
}

tom.hello;
Reflect.get(tom, 'hello');
//　第三引数は，bindに近い動き
Reflect.get(tom, 'hello', bob);