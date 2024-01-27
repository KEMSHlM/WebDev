// instanceofによって，オブジェクトが特定のクラスのインスタンスであるかどうかを判定することができる．
function F(a, b) { 
    this.a = a;
    this.b = b;
    // return {a: 1};
}

F.prototype.c = function() {}

const instance_F = new F(1, 2);
console.log(instance_F instanceof F); // -> true

function G(a, b) { 
    this.a = a;
    this.b = b;
    return {a: 1};
    // ちなみに，上のreturnは下のように書いても同じ挙動をする．
    // const self = new Object();
    // self.a = 1;
    // return self;
}

G.prototype.c = function() {}

const instance = new G(1, 2);
// 下は，return {a: 1}を返しているので，もちろんfalseになる．
console.log(instance instanceof G); // -> false
console.log(instance instanceof Object); // -> true