// スプレッド演算子は，イテレータの操作に従う
const arry1 = [1, 2, 3, 4, 5];
const arry2 = [0, ...arry1, 6];
arry2.push(6);

console.log(arry2); // [0, 1, 2, 3, 4, 5, 6]
console.log(arry1 === arry2); // false

function sum (...args) {
    let ret = 0;
    
    for (let v of args) {
        ret += v;
    }
    
    return ret;
}

const result = sum(1, 2, 3, 4, 5);
console.log(result); // 15

const obj1 = { prop1: 'value1', prop2: 'value2', prop3: 'value3' };

Object.prototype[Symbol.iterator] = function* () {
    for (let key in this) {
        yield [key, this[key]];
    }
}

// スプレッド演算子は，イテレータの操作に従う
const arry3_1 = [...obj1];
// オブジェクトリテラルで囲む場合は，挙動が異なる
const arry3_2 = {...obj1};
console.log(arry3_1);
console.log(arry3_2);