// 一番最後の引数には，関数のbodyを記述する
// let d = 0; -> 1 結果が変わる．

const fn1 = new Function('a', 'b', 'return a + b');
// const fn1 = new Function('a', 'b', 'return a + b * d');
const result = fn1(1, 2);
console.log(result);

function fn2(a, b) {
    return a + b;
}

console.log(fn2 instanceof Function);