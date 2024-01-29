const arry = [1, 2, 3, 4, 5];
console.log("arry iter is " + arry[Symbol.iterator]);

Object.prototype.method = function () { };

// arry[0]に，enumerable: falseを設定してもイテレータには影響しない
Object.defineProperty(arry, 0, {
    enumerable: false,
});

arry[6] = 'e';
for (let v of arry) {
    console.log(v);
}
