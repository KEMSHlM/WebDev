const s = Symbol('hello');
const s2 = Symbol('hello');
// Symbol は一意に定まる
console.log(s === s2); // -> false