function F(a, b) {
    this.a = a;
    this.b = b;
    return {a: 1};
}

// オブジェクトを返すと，それがインスタンスにってしまう
// 返り値(オブジェクト)を返す挙動とオブジェクトを生成する挙動をするので，区別する必要がある．
F.prototype.c = function() {}
const instance_F = new F(1, 2);
console.log('instance_F');
console.log(instance_F); // -> {a: 1}

function G(a, b) {
    this.a = a;
    this.b = b;
}

// 返り値(オブジェクト)を返す挙動とオブジェクトを生成する挙動をするので，区別する必要がある．
G.prototype.c = function() {}
const instance_G = new G(1, 2);
console.log('instance_G');
console.log(instance_G); // -> G { a: 1, b: 2 }

function newOpe(C, ...args) {
    // この_thisは，Cのprototypeを継承するオブジェクト
    // 通常は，継承しないの？？ -> newと*.createのみらしい
    const _this = Object.create(C.prototype);
    const result = C.apply(_this, args);
    console.log(result, _this);
    if (typeof result === 'object' && result !== null) {
        return result;
    }
    
    return _this;
}

console.log('instance_Ope');
const instance_Ope_F = newOpe(F, 1, 2);
const instance_Ope_G = newOpe(G, 1, 2);
console.log('instance_Ope');
console.log(instance_Ope_F)
console.log(instance_Ope_G)