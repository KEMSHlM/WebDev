// 問題１
let obj = {
    prop1: 10
}

function minux(obj, val) {
    let obj2 = obj;
    obj2.prop1 -= val;
}

minux(obj, 1);
console.log(obj.prop1);

// 問題２
function double(obj) {
    let obj2 = obj;
    obj2.prop1 = obj2.prop1 * 2;
}

double(obj);
console.log(obj.prop1);

// 問題３
obj.prop2 = {
    prop3: 1
}

// したから読むとわかりやすい．
function fn({ prop2 }) {
    let prop = prop2
    prop.prop3 = 2;
    // prop は以下の{..}を参照している．
    prop = { prop3: 3 };
    // prop2 はpropの参照をコピーする．
    return { prop2: prop };
}

obj = fn(obj);
console.log(obj.prop2.prop3);

// 問題４
function through(obj) {
    return obj;
}

// 参照をコピーして，そのまま返しているから
const obj2 = through(obj);
// trueを返す．
console.log(obj === obj2);